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
          texte: "Marie-Thérèse avait un fils qui est devenu un grand empereur. Il porte le même prénom que beaucoup de rois français, mais avec un numéro 2.",
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
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
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      bifurcation: true, // ← ICI le parcours se sépare
      questions: {
        enfant: {
          // Classique
          classique: {
            texte: "Je vis dans le désert et j'ai une bosse. Qui suis-je ?",
            choix: ["Le dromadaire", "La biche", "La tortue"],
            bonne: 0
          },
          // PMR
          pmr: {
            texte: "Quel petit ange ailé regarde les étoiles et connaît ton signe astrologique ?",
            choix: ["Cupidon", "Le putti astrologue", "L'elfe"],
            bonne: 1
          }
        },
        famille: {
          classique: {
            texte: "De mon pas lent je traverse les mers de sable. Mon cousin se vante de deux bosses.",
            choix: ["Le dromadaire", "Le zèbre", "Le lama"],
            bonne: 0
          },
          pmr: {
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
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
      indice: "Bravo ! Tu as terminé le parcours !"
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: {
        enfant: {
          texte: "Qui mesure le temps avec le soleil ?",
          choix: ["Le cadran solaire", "Le magicien", "L'oiseau étoilé"],
          bonne: 0
        },
        famille: {
          texte: "Qui fonctionne sans pile ni ressort, pour mesurer le temps ?",
          choix: ["Le cadran solaire", "L'astronome", "Le sorcier"],
          bonne: 0
        }
      },
      indice: "Trouve le Cadran Solaire dans le musée !"
    },

    // ÉTAPE 6P — Cadran Solaire
    {
      id: "cadran-solaire",
      station: "Cadran Solaire",
      personnage: "Le Cadran Solaire",
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: {
        enfant: {
          texte: "Derrière la vitre, sans descendre, il y a un gentil papi tout vieux qui surveille le musée. Qui ça peut être ?",
          choix: ["Grand père", "Le pape", "Le vieux gardien"],
          bonne: 2
        },
        famille: {
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
      videoIntro: "",
      videoBonneReponse: "",
      videsMauvaisesReponses: ["", ""],
      questions: {
        enfant: {
          texte: "Quand on la frotte, un génie apparaît pour exaucer des vœux !",
          choix: ["La lampe magique", "La princesse", "L'étoile"],
          bonne: 0
        },
        famille: {
          texte: "Très recherché dans les contes orientaux, l'on me convoite avec espoir de réaliser des vœux.",
          choix: ["La lampe magique", "La bague enchantée", "Le tapis volant"],
          bonne: 0
        }
      },
      indice: "Bravo ! Tu as terminé le parcours PMR !"
    }
  ]
};
