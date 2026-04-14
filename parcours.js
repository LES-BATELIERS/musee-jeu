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
      videoIntro: "https://www.youtube.com/embed/al5mtxqQQQo",
      videoBonneReponse: "https://www.youtube.com/embed/xrv1vkICY4A",
      videsMauvaisesReponses: [
        "https://www.youtube.com/embed/qDf-MP9J5go",
        "https://www.youtube.com/embed/y-eprhgK-fI"
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
      videoIntro: "https://www.youtube.com/embed/CEQ1_9SKAT0",
      videoBonneReponse: "https://www.youtube.com/embed/Lcilsmw5Rhs",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/1OR1jY62P7E", "https://www.youtube.com/embed/GKgw0vlmdpM"],
      questions: {
        enfant: {
          texte: "Marie-Thérèse avait un fils qui est devenu un grand empereur. Son prénom commence par la dixième lettre de l'alphabet, suivi du numéro II.",
          choix: ["Joseph II", "Louis II", "Napoléon II"],
          bonne: 0
        },
        famille: {
          texte: "Fils de la grande Marie-Thérèse, réformateur éclairé du XVIIIᵉ siècle, j'ai inspiré Mozart et Voltaire.",
          choix: ["Joseph II", "Léopold Ier", "Charles Quint"],
          bonne: 0
        }
      },
      indice: "Trouve Joseph II dans le musée pour continuer !"
    },

    // ÉTAPE 2 — Joseph II
    {
      id: "joseph-ii",
      station: "Joseph II",
      personnage: "Joseph II",
      videoIntro: "https://www.youtube.com/embed/kmbpnM9tDE0",
      videoBonneReponse: "https://www.youtube.com/embed/UU5NlkfU70U",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/v5nfooBb6wY", "https://www.youtube.com/embed/DDJHx94yMvw"],
      questions: {
        enfant: {
          texte: "Joseph II visite ses grandes salles et crie pour tester l'acoustique. Son écho revient 2 secondes plus tard. Sachant que le son voyage à 340 m/s, à quelle distance est le mur ?",
          choix: ["170 m", "340 m", "680 m"],
          bonne: 1
        },
        famille: {
          texte: "Sous Joseph II, chaque ville avait sa propre heure locale. Les fuseaux horaires universels ne furent adoptés qu'en 1884. Combien d'années après sa mort le monde entier partagea-t-il enfin la même heure ? (Joseph II mourut en 1790)",
          choix: ["74 ans", "94 ans", "114 ans"],
          bonne: 1
        }
      },
      indice: "Trouve l'Horloge du Salon rouge dans le musée !"
    },

    // ÉTAPE 3 — L'Horloge du Salon rouge
    {
      id: "horloge-salon-rouge",
      station: "L'Horloge (Salon rouge)",
      personnage: "L'Horloge",
      videoIntro: "https://www.youtube.com/embed/j9LM9EwVrbI",
      videoBonneReponse: "https://www.youtube.com/embed/L7Fyceln9Ps",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/MKDztpEOh1o", "https://www.youtube.com/embed/jIoUI1tDhnM"],
      questions: {
        enfant: {
          texte: "Une horloge sonne 1 coup à 1h, 2 coups à 2h, 3 coups à 3h... Combien de coups sonne-t-elle en tout de 1h à 6h ?",
          choix: ["18", "21", "24"],
          bonne: 1
        },
        famille: {
          texte: "Il est 14h à Namur. Tokyo est en avance de 8h, New York en retard de 6h. Combien d'heures séparent Tokyo de New York ?",
          choix: ["12h", "14h", "16h"],
          bonne: 1
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
      videoBonneReponse: "https://www.youtube.com/embed/jcUeuQGWz5U",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/yGiB77rgDfs", "https://www.youtube.com/embed/mO0pOfoMudw"],
      bifurcation: true,
      questions: {
        enfant: {
          classique: {
            videoIntro: "https://www.youtube.com/embed/f9gi1i8Byzg",
            texte: "Je vis dans le désert et j'ai une bosse. Qui suis-je ?",
            choix: ["Le dromadaire", "Le serpent", "La tortue"],
            bonne: 0
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/SLKbj6IRsGo",
            texte: "Comment s'appelle le petit ange ailé qui regarde les étoiles et connaît ton signe astrologique ?",
            choix: ["Cupidon", "Le putti astronome", "L'elfe"],
            bonne: 1
          }
        },
        famille: {
          classique: {
            videoIntro: "https://www.youtube.com/embed/f9gi1i8Byzg",
            texte: "La clepsydre égyptienne, inventée vers 1500 avant J.C., s'écoulait plus vite en été qu'en hiver. À 10°C elle perd 0,8 litre par heure, à 30°C elle perd 1,2 litre par heure. Une clepsydre contient 12 litres. Combien d'heures de différence entre une nuit d'hiver et une nuit d'été mesurée par la même clepsydre ?",
            choix: ["3 heures", "5 heures", "7 heures"],
            bonne: 1
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/SLKbj6IRsGo",
            texte: "Je donne l'heure, mais lui donne le destin des étoiles.",
            choix: ["L'angelot", "Le putti astronome", "Le génie"],
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
      videoIntro: "https://www.youtube.com/embed/dO2VEeA61wQ",
      videoBonneReponse: "https://www.youtube.com/embed/2WlUa6q1Tu0",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/8PxCp94aDik", "https://www.youtube.com/embed/KtNvU5oG0Cg"],
      questions: {
        enfant: {
          texte: "Un chevalier avance de 3 pas, recule de 1 pas, avance de 3 pas, recule de 1 pas... Après 8 mouvements, combien de pas a-t-il parcouru vers l'avant ?",
          choix: ["6 pas", "8 pas", "12 pas"],
          bonne: 1
        },
        famille: {
          texte: "Un chevalier fait 3 pas en avant puis 2 pas en arrière. Combien de pas en tout pour avancer de 10 pas ?",
          choix: ["44 pas", "46 pas", "48 pas"],
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
      videoIntro: "https://www.youtube.com/embed/waAUMbW2320",
      videoBonneReponse: "https://www.youtube.com/embed/HpmkAkqxbp0",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/TcyMP3vnnQA", "https://www.youtube.com/embed/gav_RTt8nqo"],
      questions: {
        enfant: {
          texte: "Mon bassin enchanté contient 120 litres d'eau de lune. Mais un mauvais sort y a percé un trou qui laisse couler 2 litres par minute. Dans combien de minutes mon bassin sera-t-il vide ?",
          choix: ["30 minutes", "60 minutes", "90 minutes"],
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
      videoIntro: "https://www.youtube.com/embed/6HqCE5sP5g0",
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
      videoIntro: "https://www.youtube.com/embed/S-xNwuLkdNY",
      videoBonneReponse: "https://www.youtube.com/embed/Z5iN_w8gcSc",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/iyhDj21HOmA", "https://www.youtube.com/embed/LBWyy1xHys8"],
      questions: {
        unique: {
          texte: "Le Putti Astronome te confie un secret en 3 clés :\n\n① Les anciens découpaient l'année en 13 lunes de 28 jours — il restait 1 seul jour sans nom, hors du temps.\n\n② Septembre vient de 'septem' (7), Octobre d'octo (8), Novembre de 'novem' (9), Décembre de 'decem' (10).\n\n③ Si Décembre était jadis le 10e mois, quel jour mystérieux marquait la fin de l'ancienne année ?",
          choix: ["Le 1er janvier", "Le 1er mars", "Le 1er avril"],
          bonne: 2
        }
      },
      indice: "Trouve le Vieux Gardien dans le musée !"
    },

    // ÉTAPE 7P — Vieux Gardien
    {
      id: "vieux-gardien",
      station: "Vieux Gardien",
      personnage: "Le Vieux Gardien",
      videoIntro: "https://www.youtube.com/embed/1BE_o7cC-qQ",
      videoBonneReponse: "https://www.youtube.com/embed/xy4MYKweUWw",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/uSYD62G-Oko", "https://www.youtube.com/embed/tyftcOLOwqM"],
      questions: {
        enfant: {
          texte: "Le Vieux Gardien crie et son écho revient 2 secondes plus tard. Le son voyage à 340 m/s. À quelle distance est le mur ?",
          choix: ["170 m", "340 m", "680 m"],
          bonne: 1
        },
        famille: {
          texte: "Le Vieux Gardien crie et entend deux échos : le premier après 1,5 seconde, le second après 4 secondes. Le son voyage à 340 m/s. Quelle est la distance entre les deux murs ?",
          choix: ["325 m", "425 m", "525 m"],
          bonne: 1
        }
      },
      indice: "Trouve la Lampe magique dans le musée !"
    },

    // ÉTAPE FINALE — Lampe magique (PMR)
    {
      id: "lampe-magique",
      station: "La Lampe magique",
      personnage: "La Lampe magique",
      videoIntro: "https://www.youtube.com/embed/6HqCE5sP5g0",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: { enfant: null, famille: null },
      indice: "Félicitations ! Tu as terminé le parcours PMR !"
    }
  ]
};
