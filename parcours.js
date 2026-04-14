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
          texte: "Quelle horloge habillée de fruits m'attend pour te guider ?",
          choix: ["L'horloge du salon rouge", "L'horloge du grenier", "L'horloge du jardin"],
          bonne: 0
        },
        famille: {
          texte: "« Cherche un objet ornée de fruits qui compte les saisons. »",
          choix: ["Une montre (grenier)", "Cadran solaire (Jardin)", "L'Horloge (Salon rouge)"],
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
          texte: "Quelle horloge arrêtée l'année où s'achevait les réformes de Marie-Thérèse.",
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
            texte: "De mon pas lent je traverse les mers de sable.",
            choix: ["Le dromadaire", "L'éléphant", "Le serpent"],
            bonne: 0
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
        enfant: {
          texte: "Derrière la vitre, sans descendre, il y a un gentil papi tout vieux qui surveille le musée. Qui ça peut être ?",
          choix: ["Grand père", "Le pape", "Le vieux gardien"],
          bonne: 2
        },
        famille: {
          texte: "Sans que personne ne puisse l'approcher, derrière une vitre, dans les profondeurs visibles mais interdites, il/elle protège les trésors anciens",
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
