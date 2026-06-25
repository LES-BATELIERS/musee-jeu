// ============================================================
// GAME.JS — Logique du jeu musée
// Gère : session joueur, progression, erreurs, anti-cheat
// ============================================================

const GAME = {

  // --- Lire la session ---
  getSession() {
    return {
      parcours:       localStorage.getItem('parcours') || null,
      etape:          parseInt(localStorage.getItem('etape') || '0'),
      erreurs:        parseInt(localStorage.getItem('erreurs') || '0'),
      phase:          localStorage.getItem('phase') || 'commun', // commun | classique | pmr
      indiceAffiche:  localStorage.getItem('indiceAffiche') === '1',
      totalErreurs:   parseInt(localStorage.getItem('totalErreurs') || '0')
    };
  },

  // --- Sauvegarder la session ---
  saveSession(data) {
    localStorage.setItem('parcours',      data.parcours);
    localStorage.setItem('etape',         data.etape);
    localStorage.setItem('erreurs',       data.erreurs);
    localStorage.setItem('phase',         data.phase);
    localStorage.setItem('indiceAffiche', data.indiceAffiche ? '1' : '0');
    localStorage.setItem('totalErreurs',  data.totalErreurs || 0);
  },

  // --- Réinitialiser ---
  reset() {
    localStorage.removeItem('parcours');
    localStorage.removeItem('etape');
    localStorage.removeItem('erreurs');
    localStorage.removeItem('phase');
    localStorage.removeItem('indiceAffiche');
    localStorage.removeItem('totalErreurs');
  },

  // --- Récupérer l'étape courante ---
  getEtapeCourante() {
    const s = this.getSession();
    if (!s.parcours) return null;

    let liste;
    if (s.phase === 'commun')    liste = PARCOURS.commun;
    if (s.phase === 'classique') liste = PARCOURS.classique;
    if (s.phase === 'pmr')       liste = PARCOURS.pmr;

    return liste ? liste[s.etape] : null;
  },

  // --- Vérifier anti-cheat ---
  // Retourne true si le joueur a le droit d'accéder à cet ID d'étape
  peutAcceder(idEtape) {
    const s = this.getSession();

    console.log('[peutAcceder] idEtape='+idEtape+' phase='+s.phase+' etape='+s.etape+' indiceAffiche='+s.indiceAffiche+' parcours='+s.parcours);

    // IDs réservés au parcours PMR
    const etapesPMR = ['putti-astrologue', 'cadran-solaire'];
    // IDs réservés au parcours classique
    const etapesClassique = ['dromadaire', 'licorne-classique'];

    // Un joueur PMR ne peut pas accéder aux étapes classiques
    if (s.parcours === 'pmr' && etapesClassique.includes(idEtape)) return false;
    // Un joueur classique/enfant ne peut pas accéder aux étapes PMR
    if (s.parcours !== 'pmr' && etapesPMR.includes(idEtape)) return false;

    // Si l'indice est affiché → vérifier que c'est bien le QR de l'étape courante
    // Note : avancer() ne change PAS encore la phase/etape, validerEtape() le fait
    // Donc l'étape courante EST bien celle qu'on attend
    if (s.indiceAffiche) {
      const etape = this.getEtapeCourante();
      if (!etape) return false;

      // Cas bifurcation : l'étape courante est horloge-1759, on attend dromadaire ou putti
      if (etape.bifurcation) {
        const prochainePhase = (s.parcours === 'pmr') ? 'pmr' : 'classique';
        const listeSuivante = (prochainePhase === 'pmr') ? PARCOURS.pmr : PARCOURS.classique;
        const prochaine = listeSuivante ? listeSuivante[0] : null;
        return prochaine ? prochaine.id === idEtape : false;
      }

      // Cas normal : on cherche l'étape suivante
      let liste;
      if (s.phase === 'commun')    liste = PARCOURS.commun;
      if (s.phase === 'classique') liste = PARCOURS.classique;
      if (s.phase === 'pmr')       liste = PARCOURS.pmr;
      const prochaine = liste ? liste[s.etape + 1] : null;
      return prochaine ? prochaine.id === idEtape : false;
    }

    // Sinon → on attend le QR de l'étape COURANTE
    const etape = this.getEtapeCourante();
    if (!etape) return false;
    console.log('[peutAcceder] etape courante='+etape.id+' résultat='+(etape.id === idEtape));
    return etape.id === idEtape;
  },

  // --- Avancer à l'étape suivante ---
  // Marquer l'étape réussie — l'indice est affiché
  // L'avancement réel se fait au scan du prochain QR (validerEtape)
  avancer() {
    const s = this.getSession();
    s.indiceAffiche = true;
    s.erreurs = 0;
    this.saveSession(s);
  },

  // Appelé quand le joueur scanne le prochain QR — on avance vraiment
  validerEtape() {
    const s = this.getSession();
    let liste;
    if (s.phase === 'commun')    liste = PARCOURS.commun;
    if (s.phase === 'classique') liste = PARCOURS.classique;
    if (s.phase === 'pmr')       liste = PARCOURS.pmr;

    const etapeActuelle = liste[s.etape];

    // Cas bifurcation (Horloge 1759)
    if (etapeActuelle && etapeActuelle.bifurcation) {
      if (s.parcours === 'pmr') {
        s.phase = 'pmr';
      } else {
        s.phase = 'classique';
      }
      s.etape = 0;
    } else {
      s.etape = s.etape + 1;
    }

    s.indiceAffiche = false;
    s.erreurs = 0;
    this.saveSession(s);
  },

  // --- Enregistrer une erreur ---
  ajouterErreur() {
    const s = this.getSession();
    s.erreurs = s.erreurs + 1;
    s.totalErreurs = (s.totalErreurs || 0) + 1;
    this.saveSession(s);
    return s.erreurs;
  },

  // --- Calcul progression (pour la barre d'avancement) ---
  getProgression() {
    const s = this.getSession();
    const totalCommun    = PARCOURS.commun.length;
    const totalClassique = PARCOURS.classique.length;
    const totalPmr       = PARCOURS.pmr.length;
    const total = totalCommun + (s.parcours === 'pmr' ? totalPmr : totalClassique);

    let etapesPassees = 0;
    if (s.phase === 'commun')    etapesPassees = s.etape;
    if (s.phase === 'classique') etapesPassees = totalCommun + s.etape;
    if (s.phase === 'pmr')       etapesPassees = totalCommun + s.etape;

    // Si l'indice est affiché, l'étape est réussie mais pas encore validée
    if (s.indiceAffiche) etapesPassees += 1;

    return Math.round((etapesPassees / total) * 100);
  },

  // --- Récupérer la question selon le mode ---
  getQuestion(etape, session) {
    const q = etape.questions;

    // Question unique (parcours PMR)
    if (q.unique) return q.unique;

    const niveau = session.parcours === 'enfants' ? 'enfant' : 'famille';

    // Étape de bifurcation
    if (etape.bifurcation) {
      const variante = session.parcours === 'pmr' ? 'pmr' : 'classique';
      return q[niveau][variante];
    }

    return q[niveau];
  }
};
