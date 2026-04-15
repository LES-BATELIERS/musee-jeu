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
          texte: "Je répète tout ce qu'on me dit... mais savais-tu que les mots et la musique transforment l'eau ? Le Dr Emoto l'a prouvé avec des cristaux. Le prochain personnage que tu vas rencontrer était si passionné de musique qu'il invita Mozart à sa cour. Notre corps est composé à 70% d'eau par kilo. Si une personne pèse 60 kg, combien de litres vibrent en elle à chaque mélodie ?",
          choix: ["36 litres", "42 litres", "48 litres"],
          bonne: 1,
          messageBonneReponse: "42 litres d'eau en toi... sensibles à chaque mot, chaque musique, chaque pensée, chaque émotion. Peut-être que prendre soin de ce que tu penses et écoutes, c'est déjà prendre soin de toi."
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
          texte: "Avant 1884, chaque ville avait sa propre heure — les montres de Paris ne concordaient pas avec celles de Namur ! Ce n'est qu'après des siècles d'horloges précises que 25 nations signèrent enfin un accord : Greenwich deviendrait le méridien zéro, référence de tous les fuseaux. Aujourd'hui il est 14h à Namur. Tokyo est en avance de 8h, New York en retard de 6h. Combien d'heures séparent Tokyo de New York ?",
          choix: ["12h", "14h", "16h"],
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
          texte: "En 1759, l'année même où cette horloge s'est arrêtée, Harrison résout le problème de la longitude en mer. Pour trouver sa position, un marin devait connaître l'heure exacte à Greenwich. Si son chronomètre retardait de 4 minutes, de combien de degrés sa position serait-elle fausse ? (La Terre tourne de 360° en 24h)",
          choix: ["0,5°", "1°", "2°"],
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
            texte: "Mon premier est la plus haute carte du jeu.\nMon deuxième, c'est ce que tu es quand tu en as plus qu'il n'en faut.\nMon troisième invente, imagine et se questionne.\nMon tout se cache dans le jardin du musée, les yeux tournés vers le ciel.\nSaurais-tu le retrouver ?",
            choix: ["Royauté", "Astronome", "Damnation"],
            bonne: 1,
            messageBonneReponse: "7,83 Hz — la pulsation de la Terre. Ton cerveau vibre à cette même fréquence quand tu te détends, médites ou marches dans la nature. Nous ne sommes pas séparés de la planète... nous en sommes le prolongement."
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
      videoBonneReponse: "https://www.youtube.com/embed/Yhw4OQjhSZY",
      videsMauvaisesReponses: ["https://www.youtube.com/embed/iyhDj21HOmA", "https://www.youtube.com/embed/LBWyy1xHys8"],
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
