// v=2024-fix-putti
// ============================================================
// FICHIER DE DONNÉES DU JEU - MUSÉE
// Modifie ce fichier pour changer questions, réponses, vidéos
// ============================================================

const PARCOURS = {

  // ----------------------------------------------------------
  // TRONC COMMUN (toutes les étapes partagées par tous)
  // ----------------------------------------------------------
  commun: [

    // ÉTAPE 0 — Introduction du Guide
    {
      id: "intro-guide",
      station: "Introduction",
      personnage: "Le Guide",
      videoIntro: "https://www.youtube.com/embed/DvsH159e45U",
      videoBonneReponse: "https://www.youtube.com/embed/ky7wWCBApX0",
      videsMauvaisesReponses: [
        "https://www.youtube.com/embed/bfCclIsJEjQ",
        "https://www.youtube.com/embed/r8XTB6Rm1_s"
      ],
      questions: {
        enfant: {
          texte: "Qui est ce bavard à plumes qui répète tout ce qu'on lui dit ?",
          choix: ["Le perroquet", "Le poulet", "L'autruche"],
          bonne: 0
        },
        famille: {
          texte: "Quel oiseau exotique, offert comme trésor vivant, amusait les nobles d'autrefois ?",
          choix: ["Le perroquet", "Le faucon", "Le pigeon"],
          bonne: 0
        }
      },
      indice: "Trouve le perroquet dans le musée pour continuer !"
    },

    // ÉTAPE 1 — Le Perroquet
    {
      id: "perroquet",
      station: "Le Perroquet",
      personnage: "Le Perroquet",
      videoIntro: "https://www.youtube.com/embed/qSrEyoz7WVk",
      videoBonneReponse: "https://www.youtube.com/embed/GHS-yI8CC-0",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/xb8puGSgPrM", "https://www.youtube.com/embed/MYPDx5FAsYg"],
      questions: {
        enfant: {
          texte: "Marie-Thérèse avait un fils qui est devenu un grand empereur. Son prénom commence par la dixième lettre de l'alphabet, suivi du numéro II.",
          choix: ["Joseph II", "Louis II", "Napoléon II"],
          bonne: 0
        },
        famille: {
          texte: "Savais-tu que le Dr Emoto a découvert qu'il n'existe jamais deux cristaux d'eau identiques — comme les flocons de neige, chacun est unique et porte sa propre histoire. Ces deux abbés sur le mur aussi sont uniques... mais l'un d'eux cache un secret. Quelque chose a été ajouté sur son portrait après sa mort. Sauras-tu trouver quoi ?",
          choix: ["Un chapeau", "Une croix", "Une chemise"],
          bonne: 1,
          messageBonneReponse: "Pas deux flocons identiques... pas deux êtres identiques non plus. Ce que tu écoutes, ce qu'on te dit, ce que tu ressens — tout cela te façonne doucement. Prendre soin de ses pensées, c'est déjà prendre soin de soi."
        }
      },
      indice: "Trouve Joseph II dans le musée pour continuer !"
    },

    // ÉTAPE 2 — Joseph II
    {
      id: "joseph-ii",
      station: "Joseph II",
      personnage: "Joseph II",
      videoIntro: "https://www.youtube.com/embed/H9Ioq9c6tpk",
      videoBonneReponse: "https://www.youtube.com/embed/p_XxCOi5duM",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/7KPVi6gNEc4", "https://www.youtube.com/embed/3jtGKUmHRJw"],
      questions: {
        enfant: {
          texte: "Imagine que tu arrives à l'école et tu dis à ta maîtresse : 'Je ne suis pas en retard, j'ai décidé que l'école commence à midi !' Elle va dire quoi ? Avant, chaque ville faisait exactement ça ! Qui a eu l'idée d'inventer une heure pour tout le monde ?",
          choix: ["Les maîtresses", "Les humains", "Les pizzas"],
          bonne: 1,
          messageBonneReponse: "Tu sais quoi ? Avant, chaque ville avait sa propre heure ! Comme si chaque maison décidait toute seule. C'est les grandes personnes qui ont tout mis à la même heure pour que les trains arrivent à l'heure. L'heure sur ta montre ? C'est une idée qu'on a inventée ensemble !"
        },
        famille: {
          texte: "Avant 1884, chaque ville vivait à sa propre heure. Mais les trains allaient trop vite — impossible de faire des horaires quand chaque ville avait son propre temps ! Alors 25 nations signèrent un accord à Washington, choisissant Greenwich comme référence mondiale. Le temps a toujours existé... mais l'heure sur ta montre ?",
          choix: ["C'est une loi de la nature", "C'est une convention humaine", "C'est une force cosmique"],
          bonne: 1,
          messageBonneReponse: "Des siècles pour s'entendre sur une référence commune. Et pourtant aujourd'hui encore, la Chine impose une seule heure pour un pays qui devrait en avoir 5... Si l'heure n'est qu'une convention inventée par l'homme, alors peut-être que le temps lui-même n'est pas ce qu'on croit. Einstein disait : 'La distinction entre passé, présent et futur n'est qu'une illusion, aussi tenace soit-elle.'"
        }
      },
      indice: "Trouve l'Horloge du Salon rouge dans le musée !"
    },

    // ÉTAPE 3 — L'Horloge du Salon rouge
    {
      id: "horloge-salon-rouge",
      station: "L'Horloge (Salon rouge)",
      personnage: "L'Horloge",
      videoIntro: "https://www.youtube.com/embed/H-fkIpErUb8",
      videoBonneReponse: "https://www.youtube.com/embed/DOnVAWFW8Ys",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/aKXXWSDq7oY", "https://www.youtube.com/embed/yL_dN8YHTg4"],
      questions: {
        enfant: {
          texte: "Cette horloge tourne depuis des siècles. Un poète a dit : 'Le temps, c'est ce qui empêche que tout arrive en même temps.' Qu'est-ce qui mesure le temps dans la nature, sans avoir besoin d'une horloge ?",
          choix: ["Le chant du coq", "Les ronflements du perroquet", "Les saisons"],
          bonne: 2
        },
        famille: {
          texte: "L'horloge du salon rouge bat comme un cœur mécanique. Marcel Proust écrivait que 'le temps perdu' ne l'est jamais vraiment — il vit dans nos souvenirs. Comment appelle-t-on en littérature le procédé qui consiste à raconter des événements passés dans un récit au présent ?",
          choix: ["L'analepse", "La métaphore", "L'ellipse"],
          bonne: 0
        }
      },
      indice: "Trouve l'horloge près d'un escalier !"
    },

    // ÉTAPE 4 — L'Horloge 1759 (point de bifurcation)
    // Après cette étape : parcours CLASSIQUE ou PMR
    {
      id: "horloge-1759",
      station: "Horloge 1759",
      personnage: "L'Horloge 1759",
      videoIntro: "",
      videoBonneReponse: "https://www.youtube.com/embed/hnr4sP3YQwI",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/ngJ-VgshEnY", "https://www.youtube.com/embed/CJXDBvwUgOI"],
      bifurcation: true,
      questions: {
        enfant: {
          classique: {
            videoIntro: "https://www.youtube.com/embed/PdtngomiHzk",
            texte: "Je vis dans le désert et j'ai une bosse. Qui suis-je ?",
            choix: ["Le dromadaire", "Le chameau", "La tortue"],
            bonne: 0,
            messageBonneReponse: "Bien joué ! Maintenant cherche un animal à l'étage !"
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/Mszn8vFvuxA",
            texte: "Comment s'appelle le petit ange ailé qui regarde les étoiles et connaît ton signe astrologique ?",
            choix: ["Cupidon", "Le putti astronome", "L'elfe"],
            bonne: 1
          }
        },
        famille: {
          classique: {
            videoIntro: "https://www.youtube.com/embed/PdtngomiHzk",
            texte: "Mon premier est le baldaquin suspendu au-dessus du trône royal.\nMon deuxième, c'est ce que fait un serf pour son seigneur.\nMon tout est le royaume du dromadaire.",
            choix: ["Dessert", "Désert", "Désaccord"],
            bonne: 1,
            messageBonneReponse: "Bien joué ! Maintenant cherche un animal à l'étage !"
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/Mszn8vFvuxA",
            texte: "Mon premier est celui que tous les joueurs de cartes rêvent de tenir en main.\nMon deuxième envahit ce qui devrait rester raisonnable.\nMon troisième, ni femme ni enfant, désigne pourtant toute notre humanité.\nMon tout observe le ciel depuis le jardin du musée, les yeux levés vers l'infini.",
            choix: ["Cartographe", "Astrologue", "Astronome"],
            bonne: 2
          }
        }
      },
      indice: {
        classique: "Trouve un animal à l'étage du musée !",
        pmr: "Trouve le Putti Astronome dans le musée !"
      }
    }
  ],

  // ----------------------------------------------------------
  // PARCOURS CLASSIQUE (Enfants + Famille après Horloge 1759)
  // ----------------------------------------------------------
  classique: [

    // ÉTAPE 5C — Le Dromadaire
    {
      id: "dromadaire",
      station: "Le Dromadaire",
      personnage: "Le Dromadaire",
      videoIntro: "https://www.youtube.com/embed/mSrgRkJqS7A",
      videoBonneReponse: "https://www.youtube.com/embed/v0KDlA0U-bQ",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/ZrqXjjVA8NI", "https://www.youtube.com/embed/gsZglG5dbeY"],
      questions: {
        enfant: {
          texte: "Pendant 200 ans, tout le monde a cru que Napoléon avait cassé le nez du Sphinx. Faux ! Des dessins datant d'avant lui le prouvent. Si 200 ans de fausses histoires peuvent exister... quelle serait la bonne attitude face à une affirmation ?",
          choix: ["La croire immédiatement", "Se questionner", "L'ignorer"],
          bonne: 1,
          messageBonneReponse: "200 ans de mensonge sur le nez du Sphinx... Le doute est une force, pas une faiblesse. Questionner ce qu'on te dit, chercher les preuves, ne pas avaler tout ce qu'on te raconte — c'est une des choses les plus courageuses qu'un être humain puisse faire."
        },
        famille: {
          texte: "Le Sphinx de Gizeh a le nez cassé. Napoléon a été accusé — sans la moindre preuve — mais des gravures datant d'avant son passage montrent qu'il manquait déjà. Certains historiens pensent qu'il fut volontairement détruit pour effacer les traits noirs africains du visage. George Orwell écrivait : 'Celui qui contrôle le passé contrôle l'avenir.' De quel procédé parle-t-il ?",
          choix: ["La légende", "La réécriture de l'histoire", "La mythologie"],
          bonne: 1
        }
      },
      indice: "Trouve la Licorne dans le musée !"
    },

    // ÉTAPE 6C — La Licorne
    {
      id: "licorne-classique",
      station: "La Licorne",
      personnage: "La Licorne",
      videoIntro: "https://www.youtube.com/embed/Hbat1rxbXxE",
      videoBonneReponse: "https://www.youtube.com/embed/gXL6cRe0C5U",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/HPuIKFIwllM", "https://www.youtube.com/embed/WkustlPWb4A"],
            orientationHTML: true,
      orientation: "Suis les panneaux NUIT BLANCHE vers la Cour de la lumière du jour ✦<br><br>Cherche une porte dissimulée dans la pièce suivante.<div style='background:#f5e090;border:2px solid #6a4410;border-radius:8px;padding:16px;margin-top:16px;'><div style='border:1px dashed #8a6020;border-radius:4px;padding:14px;'><div style='display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:6px;'><svg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'><circle cx='22' cy='22' r='9' fill='none' stroke='#1e0e04' stroke-width='2'/><circle cx='22' cy='22' r='4' fill='#1e0e04'/><line x1='22' y1='5' x2='22' y2='10' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='22' y1='34' x2='22' y2='39' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='5' y1='22' x2='10' y2='22' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='34' y1='22' x2='39' y2='22' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='9.5' y1='9.5' x2='13' y2='13' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='31' y1='31' x2='34.5' y2='34.5' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='34.5' y1='9.5' x2='31' y2='13' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/><line x1='13' y1='31' x2='9.5' y2='34.5' stroke='#1e0e04' stroke-width='2.2' stroke-linecap='round'/></svg><div><div style='font-size:20px;font-weight:bold;color:#1e0e04;letter-spacing:3px;'>NUIT BLANCHE</div><div style='font-size:11px;font-style:italic;color:#5a3808;letter-spacing:2px;'>Lumière du jour</div></div></div><div style='width:80%;margin:10px auto;height:1px;background:#6a4410;'></div><div style='position:relative;'><div style='position:absolute;left:50%;top:0;bottom:0;width:0;border-left:1px dashed #8a6020;transform:translateX(-50%);'></div><div style='display:flex;margin-bottom:12px;position:relative;z-index:1;'><div style='flex:1;text-align:center;'><span style='font-size:10px;background:#1e0e04;color:#f5e090;letter-spacing:2px;padding:3px 10px;border-radius:3px;'>D'abord</span></div><div style='flex:1;text-align:center;'><span style='font-size:10px;background:#5a3808;color:#f5e090;letter-spacing:2px;padding:3px 10px;border-radius:3px;'>Ensuite</span></div></div><div style='display:flex;align-items:center;position:relative;z-index:1;'><div style='flex:1;text-align:center;padding-right:16px;'><div style='font-size:22px;font-weight:bold;color:#1e0e04;margin-bottom:8px;'>Par ici</div><svg width='60' height='28' viewBox='0 0 60 28' xmlns='http://www.w3.org/2000/svg'><line x1='2' y1='14' x2='50' y2='14' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/><line x1='50' y1='14' x2='38' y2='4' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/><line x1='50' y1='14' x2='38' y2='24' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/></svg><div style='font-size:13px;font-style:italic;color:#5a3808;margin-top:6px;'>(7 pas)</div></div><div style='flex:1;text-align:center;padding-left:16px;'><div style='font-size:22px;font-weight:bold;color:#1e0e04;margin-bottom:8px;'>Par là</div><svg width='60' height='28' viewBox='0 0 60 28' xmlns='http://www.w3.org/2000/svg'><line x1='58' y1='14' x2='10' y2='14' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/><line x1='10' y1='14' x2='22' y2='4' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/><line x1='10' y1='14' x2='22' y2='24' stroke='#1e0e04' stroke-width='2.5' stroke-linecap='round'/></svg><div style='font-size:13px;font-style:italic;color:#5a3808;margin-top:6px;'>(8 pas)</div></div></div></div></div></div>",
      indice: "Trouve la Lampe magique dans le musée !"
    },

    // ÉTAPE FINALE — Lampe magique (classique)
    {
      id: "lampe-magique",
      station: "La Lampe magique",
      personnage: "La Lampe magique",
      videoIntro: "https://www.youtube.com/embed/JjPM4IithaI",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: { enfant: null, famille: null },
      indice: "Félicitations ! Tu as terminé le parcours !"
    }
  ],

  // ----------------------------------------------------------
  // PARCOURS PMR (après Horloge 1759)
  // ----------------------------------------------------------
  pmr: [

    // ÉTAPE 5P — Putti Astronome
    {
      id: "putti-astrologue",
      station: "Putti Astronome",
      personnage: "Le Putti Astronome",
      videoIntro: "https://www.youtube.com/embed/zC-Bogb-qnE",
      videoBonneReponse: "https://www.youtube.com/embed/7c3sRBsYq4c",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/8PJ2i8IUlfs", "https://www.youtube.com/embed/x4LXD4nxfOA"],
      questions: {
        unique: {
          texte: "Le Putti Astronome te confie un secret en 3 clés :\n\n① Les anciens découpaient l'année en 13 lunes de 28 jours — il restait 1 seul jour sans nom, hors du temps.\n\n② Septembre vient de 'septem' (7), Octobre d'octo (8), Novembre de 'novem' (9), Décembre de 'decem' (10).\n\n③ Si Décembre était jadis le 10e mois, quel jour mystérieux marquait la fin de l'ancienne année ?",
          choix: ["Le 1er janvier", "Le 1er mars", "Le 1er avril"],
          bonne: 2,
          messageBonneReponse: "Le poisson d'avril n'est pas une blague — c'est le souvenir d'un jour sans nom, hors du temps... Maintenant cherche le Vieux Gardien dans la serre — pas celle du jardin, mais celle qui se cache à l'intérieur du musée."
        }
      },
      indice: "Trouve le Vieux Gardien dans le musée !"
    },

    // ÉTAPE 7P — Vieux Gardien
    {
      id: "vieux-gardien",
      station: "Vieux Gardien",
      personnage: "Le Vieux Gardien",
      videoIntro: "https://www.youtube.com/embed/lPqw2nYo3E0",
      videoBonneReponse: "https://www.youtube.com/embed/5o630es4POU",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/nmFzb3SOXEY", "https://www.youtube.com/embed/XIhGVUl-r5c"],
      questions: {
        unique: {
          texte: "Le Vieux Gardien sait que les mots ont un poids. Victor Hugo écrivait : 'La musique, c'est du bruit qui pense.' Si les mots sont des vibrations et que notre corps est une caisse de résonance, comment appelle-t-on la figure de style qui donne une vie, une âme à une chose inanimée ?",
          choix: ["L'hyperbole", "La personnification", "L'allégorie"],
          bonne: 1,
          messageBonneReponse: "Les mots vibrent. La musique guérit. Et si chaque mélodie entendue, chaque mot reçu depuis ta naissance, avait doucement dessiné les contours de qui tu es ?\n\nCherche maintenant dans cette même pièce... la Lampe Magique ✨"
        }
      },
      indice: "Trouve la Lampe magique dans le musée !"
    },

    // ÉTAPE FINALE — Lampe magique (PMR)
    {
      id: "lampe-magique",
      station: "La Lampe magique",
      personnage: "La Lampe magique",
      videoIntro: "https://www.youtube.com/embed/ZqZNc5UG8nM",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: { enfant: null, famille: null },
      indice: "Félicitations ! Tu as terminé le parcours PMR !"
    }
  ]
};
