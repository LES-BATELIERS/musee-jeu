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
          messageBonneReponse: "Autant de litres d'eau en toi... sensibles à chaque mot, chaque musique, chaque pensée, chaque émotion. Peut-être que prendre soin de ce que tu penses et écoutes, c'est déjà prendre soin de toi."
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
          texte: "Imagine que tu arrives à l'école et tu dis à ta maîtresse : 'Je suis pas en retard, j'ai décidé que l'école commence à midi !' Elle va dire quoi ? Avant, chaque ville faisait exactement ça ! Qui a eu l'idée d'inventer une heure pour tout le monde ?",
          choix: ["Les maîtresses", "Les humains", "Les pizzas"],
          bonne: 1
        },
        famille: {
          texte: "Avant 1884, New York et Namur ne partageaient pas la même heure — chaque ville vivait dans son propre présent. Puis les hommes inventèrent une heure universelle, choisissant Greenwich comme méridien zéro. Mais si chaque civilisation a inventé sa propre façon de mesurer le temps, quel mot décrit le mieux ce qu'est réellement le temps ?",
          choix: ["Une loi naturelle", "Une invention humaine", "Une force universelle"],
          bonne: 1,
          messageBonneReponse: "Des siècles pour s'entendre sur une référence commune. Et pourtant aujourd'hui encore, la Chine impose une seule heure pour un pays qui devrait en avoir 5... Si l'heure n'est qu'une convention inventée par l'homme — une histoire qu'on se raconte ensemble — alors peut-être que le temps lui-même n'est pas ce qu'on croit. Einstein disait : 'La distinction entre passé, présent et futur n'est qu'une illusion, aussi tenace soit-elle.'"
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
          choix: ["Les saisons", "Les horloges", "Les livres"],
          bonne: 0
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
            choix: ["Le dromadaire", "Le serpent", "La tortue"],
            bonne: 0
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
            texte: "Mon premier se lance sur une table de jeu.\nMon deuxième, c'est ce que fait un serveur au restaurant.\nMon tout est le royaume du dromadaire.",
            choix: ["Dessert", "Désert", "Désaccord"],
            bonne: 1
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/Mszn8vFvuxA",
            texte: "Mon premier est la plus haute carte du jeu.\nMon deuxième, c'est quand la quantité dépasse la limite.\nMon troisième est le mot qui désigne tous les êtres humains.\nMon tout se cache dans le jardin du musée, les yeux tournés vers le ciel.\nSaurais-tu le retrouver ?",
            choix: ["Royauté", "Astronome", "Damnation"],
            bonne: 1
          }
        }
      },
      indice: {
        classique: "Trouve le Dromadaire dans le musée !",
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
          texte: "Le Sphinx de Gizeh veille depuis 4500 ans. Son nez a disparu — personne ne sait vraiment comment ni pourquoi. Napoléon a été accusé pendant des siècles, sans aucune preuve. L'histoire que tu apprends à l'école a toujours été écrite par quelqu'un. Par qui était-elle écrite le plus souvent ?",
          choix: ["Les savants", "Les vainqueurs", "Les vaincus"],
          bonne: 1
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
      questions: {
        enfant: {
          texte: "Mon bassin enchanté contient 10 litres d'eau de lune. Un mauvais sort y a percé un trou qui laisse couler 1 litre par minute. Dans combien de minutes mon bassin sera-t-il vide ?",
          choix: ["5 minutes", "10 minutes", "15 minutes"],
          bonne: 1
        },
        famille: {
          texte: "La fontaine enchantée du château contient 360 litres. Une fissure magique laisse s'échapper 40 cl par seconde. En combien de minutes l'eau aura-t-elle entièrement disparu ?",
          choix: ["10 minutes", "15 minutes", "20 minutes"],
          bonne: 1
        }
      },
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
          messageBonneReponse: "Le poisson d'avril n'est pas une blague — c'est le souvenir d'un jour sans nom, hors du temps..."
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
          choix: ["La métaphore", "La personnification", "L'allégorie"],
          bonne: 1,
          messageBonneReponse: "Les mots vibrent. La musique guérit. Et si chaque mélodie entendue, chaque mot reçu depuis ta naissance, avait doucement dessiné les contours de qui tu es ?"
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
