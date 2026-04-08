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
          choix: ["Le perroquet", "Le lion", "Le singe"],
          bonne: 0
        },
        famille: {
          texte: "Quel oiseau exotique, offert comme trésor vivant, amusait les nobles d'autrefois ?",
          choix: ["Le perroquet", "Le faucon", "Le perroquet gris"],
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
      videoIntro: "https://www.youtube.com/embed/Wqtln3XlPGI",
      videoBonneReponse: "https://www.youtube.com/embed/UU5NlkfU70U",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/v5nfooBb6wY", "https://www.youtube.com/embed/DDJHx94yMvw"],
      questions: {
        enfant: {
          texte: "Quelle horloge habillée de fruits m'attend pour te guider ?",
          choix: ["L'horloge du salon rouge", "L'horloge du grenier", "L'horloge du jardin"],
          bonne: 0
        },
        famille: {
          texte: "« Cherche un grand objet orné de fruits qui compte les saisons et les secondes »...",
          choix: ["Une montre", "Cadran solaire", "L'Horloge (Salon rouge)"],
          bonne: 2
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
          texte: "Je suis l'horloge du salon rouge ! Passe devant ma sœur qui n'est pas de marbre, figée sur une année.",
          choix: ["L'horloge qui danse", "L'horloge de 1759", "L'horloge qui chante"],
          bonne: 1
        },
        famille: {
          texte: "Quelle horloge arrêtée l'année où s'achevait la décennie des réformes de Marie-Thérèse ?",
          choix: ["L'horloge de 1759", "L'horloge de 1412", "L'horloge de 1914"],
          bonne: 0
        }
      },
      indice: "Trouve l'Horloge de 1759 dans le musée !"
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
            choix: ["Le dromadaire", "La biche", "La tortue"],
            bonne: 0
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/SLKbj6IRsGo",
            texte: "Comment s'appelle le petit ange ailé qui regarde les étoiles et connaît ton signe astrologique ?",
            choix: ["Cupidon", "Le putti astrologue", "L'elfe"],
            bonne: 1
          }
        },
        famille: {
          classique: {
            videoIntro: "https://www.youtube.com/embed/f9gi1i8Byzg",
            texte: "De mon pas lent je traverse les mers de sable. Mon cousin se vante de deux bosses.",
            choix: ["Le dromadaire", "Le zèbre", "Le lama"],
            bonne: 0
          },
          pmr: {
            videoIntro: "https://www.youtube.com/embed/SLKbj6IRsGo",
            texte: "Je donne l'heure, mais lui donne le destin des étoiles.",
            choix: ["L'angelot", "Le putti astrologue", "Le génie"],
            bonne: 1
          }
        }
      },
      indice: {
        classique: "Trouve le Dromadaire dans le musée !",
        pmr: "Trouve le Putti Astrologue dans le musée !"
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
          texte: "Je suis un cheval magique avec une corne sur la tête.",
          choix: ["Centaure", "Pégase", "La licorne"],
          bonne: 2
        },
        famille: {
          texte: "On m'attribuait jadis le pouvoir de purifier les poisons. Mon image ornait les tapisseries médiévales.",
          choix: ["Dragon", "Pégase", "La licorne"],
          bonne: 2
        }
      },
      indice: "Trouve la Licorne dans le musée !"
    },

    // ÉTAPE 6C — La Licorne
    {
      id: "licorne-classique",
      station: "La Licorne",
      personnage: "La Licorne",
      videoIntro: "https://www.youtube.com/embed/p0zQH-LkCmE",
      videoBonneReponse: "https://www.youtube.com/embed/HpmkAkqxbp0",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/TcyMP3vnnQA", "https://www.youtube.com/embed/gav_RTt8nqo"],
      questions: {
        enfant: {
          texte: "Quand on la frotte, un génie apparaît pour exaucer des vœux !",
          choix: ["La lampe magique", "La princesse", "L'étoile"],
          bonne: 0
        },
        famille: {
          texte: "Très recherché dans les contes orientaux, l'on me convoite avec espoir de réaliser des vœux.",
          choix: ["La lampe magique", "Le griffon", "Le phénix"],
          bonne: 0
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

    // ÉTAPE 5P — Putti Astrologue
    {
      id: "putti-astrologue",
      station: "Putti Astrologue",
      personnage: "Le Putti Astrologue",
      videoIntro: "https://www.youtube.com/embed/pZTbmAtOz6U",
      videoBonneReponse: "https://www.youtube.com/embed/fjYmmtD9OTE",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/8TJuc9SoZrs", "https://www.youtube.com/embed/wIKsSnv4IJ8"],
      questions: {
        unique: {
          texte: "Sans que personne ne puisse l'approcher, derrière une vitre, dans les profondeurs visibles mais interdites, il protège les trésors anciens.",
          choix: ["La caméra de surveillance", "Le sablier", "Le vieux gardien"],
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
        unique: {
          texte: "Très recherché dans les contes orientaux, l'on me convoite avec espoir de réaliser des vœux.",
          choix: ["La lampe magique", "La bague enchantée", "Le tapis volant"],
          bonne: 0
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
