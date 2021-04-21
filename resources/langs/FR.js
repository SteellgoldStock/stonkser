const texts = {
  FILE_LANG_FOR: "FR",

  MISSING_ARGUMENTS: (ARGUMENT) => `L'argument \`${ARGUMENT}\` n'est pas défini`,
  MAXIMAL_CHARACTERS: (MAXIMAL_CHARACTERS) => `Vous avez mis plus de caractères que le nombre maximum (\`${MAXIMAL_CHARACTERS}\`)`,
  MISSING_PERMISSIONS: (PERMISSION) => `Vous n'avez pas la permission requise pour executer ceci (\`${PERMISSION}\`)`,

  // ABOUT
  JOB_ERROR: "Vous n'avez pas encore de travail",
  JOB_HAS_ONE: (JOB, JOBJOINDATE) => `Vous travaillez dans une entreprise de \`${JOB}\`, vous avez rejoin ce travail le \`${JOBJOINDATE}\``,
  JOB_RANDOM_TIP: (MIN, MAX) => `Pourboire aléatoire entre ${MIN}$ et ${MAX}$`,
  JOB_NOT_PRECISED: (PREFIX) => `Vous devez préciser le métier au quel vous voulez voir ces informations\n- Exemple: \`${PREFIX}job i chimist\``,
  JOB_DONT_EXIST: (PREFIX) =>  `Le métier que vous venez de préciser n'existe pas, mais vous pouvez en faire une suggestion avec la commande \`${PREFIX}suggest [text]\``,
  JOB_INFORMATIONS_EMBED_TITLE: (JOB) => `Informations sur le métier de ${JOB}`,
  JOB_INFORMATIONS_EMBED_CONTENT: (SALARY, ACTION) => `Payé(e) \`${SALARY}$\` par ${ACTION}`,
  JOB_INFORMATIONS_EMBED_BENEFITS: (BENEFITS) => `\n\n**Avantages**: ${BENEFITS}`,
  JOB_INFORMATIONS_EMBED_DISADVANTAGES: (DISADVANTAGES) => `\n**Inconvénients**: ${DISADVANTAGES}`,
  JOB_JOBS_LIST: "Liste des métiers",
  JOB_CHIMIST: (SALARY) => `🧪 - Chimiste [${SALARY}$/Potions vendues]\n`,
  JOB_CLOWN: (SALARY) => `🎈 - Clown [${SALARY}$/Anniversaires]\n`,
  JOB_PLUMBER: (SALARY) => `⚒ - Plombier [${SALARY}$/Réparations]\n`,
  JOB_ICESELLER: (SALARY) => `🍨 - Vendeur de glace [${SALARY}$/Glaces vendues]\n`,
  JOB_BANKER: "💵 - Banquier [Voir informations]\n",
  JOB_KILLER: "🔪 - Tueur en série [En fonction de la prime sur la personne]",
  JOB_JOINED_SUCCESS: (JOB) => `Vous avez rejoin une entreprise exerçant le métier de \`${JOB}\``,
  JOB_LEAVED_SUCCESS: (JOB) => `Vous avez démissioner d'une entreprise exerçant le métier de \`${JOB}\``,
  JOB_NOT_PRECISED_FOR_JOIN: "Vous n'avez pas préciser le métier que vous voulez rejoindre, pour en avoir la liste, faites `-job list`",
  JOB_NEED_TO_LEAVE_TO_CHANGE: "Vous avez déjà un métier, faites `-job leave` pour quitter votre travail.",
  JOB_CANT_LEAVE_BECAUSE_DONT_HAVE_JOB: "Vous n'avez pas de métier, faites `-job join [job]` pour rejoindre un travail.",

  // WORK
  WORK_FATIGUE_TOO_HIGH: (PREFIX) => `Vous êtes trop fatigué(e) vous ne pouvez plus travailler, rétablissez vous en dormant (\`${PREFIX}sleep\`)`,
  WORK_SUCCESS_CHIMIST: (COUNT, EARNED) => `🧪 Vous venez de vendre \`${COUNT} potions\` que vous venez de créer, vous avez gagner \`${EARNED}$\``,
  WORK_SUCCESS_CLOWN: (COUNT, EARNED) => `🎈 Vous avez animé \`${COUNT} anniversaires\`, vous avez gagner \`${EARNED}$\``,
  WORK_SUCCESS_PLUMBER: (COUNT, EARNED) => `⚒ Vous venez de faire \`${COUNT} réparations\`, vous avez gagner \`${EARNED}$\``,
  WORK_DONT_FATIGUE: "Vous n'êtes pas fatigué(e) !",

  // SLEEP
  SLEEP_START: (PREFIX) => `Bonne nuit, nous nous reverrons dans \`8 heures\` !`,
  SLEEP_STOP: (PREFIX) => `Bonjour, avez-vous bien dormi(e) ?`,

  // ABOUT
  ABOUT_EMBED_DESCRIPTION: "Stonkser est un bot créer pour recréer une économie complète avec 4 villes : Nussdorfer,  Montreal, Paris, New-York, vous aurez plusieurs métiers, chacun son but dans la société.",
  ABOUT_EMBED_FIELD_TITLE: "Pourquoi Stonsker ?",
  ABOUT_EMBED_FIELD_CONTENT: "Le nom de Stonkser, à été utilisé pour ce bot car il recrée une économie",

  // HELP
  HELP_EMBED_TITLE: "Informations",
  HELP_EMBED_DESCRIPTION: (PREFIX) => `Le prefix est \`${PREFIX}\` sur ce serveur\n**Conseil de PRO**: Faite \`${PREFIX}help i [command]\` pour avoir plus d'informations sur la commande`,
  HELP_EMBED_CATEGORY_ECONOMY_TITLE: (count) => `Catégorie économie (${count})`,
  HELP_EMBED_CATEGORY_INFORMATIONS_TITLE: (count) => `Catégorie informations (${count})`,
  HELP_EMBED_CATEGORY_CONFIGURATIONS_TITLE: (count) => `Catégorie configurations (${count})`,

  // CONFIG
  CONFIG_PREFIX_UPDATE: (PREFIX) => `Vous venez de modifier le prefix de ce serveur, à présent vous devez utiliser \`${PREFIX}\` !`,
  CONFIG_LANG_UPDATE: (LANG) => `Vous venez de modifier la langue du bot sur ce serveur, à présent le bot vous parlera en \`${LANGS[LANG]}\` !`,
  CONFIG_ERROR_LANG_NOT_FOUND: (LANG) => `La langue \`${LANG}\` n'existe pas, donc je vous ai remis sur la langue définie ulterierement`,

  // ACCOUNT
  ACCOUNT_ERROR_NO_JOB: "Aucun métier",
  ACCOUNT_ARRAY_TITLE: "Votre compte",
  ACCOUNT_USER_MONEY: (MONEY) => `Vous avez : \`${MONEY}$\` `,
  ACCOUNT_USER_MONEY_BANK: (MONEY) => `Vous avez : \`${MONEY}$\` en banque`,
  ACCOUNT_USER_JOB: (JOB) => `Votre métier est \`${JOB}\`\n`,
  ACCOUNT_USER_TOWN: (TOWN, RENT) => `Votre loyer est à \`${TOWN}\` pour \`${RENT}$/mois\``,
  ACCOUNT_RENT_PAY: "🏡 Vous devez payer votre loyer ! (`-rent pay`)",

  // BANK
  BANK_DEPOSIT_MONEY: (AMOUNT, NEW_BANK_AMOUNT) => `Vous venez de déposer \`${AMOUNT}$\` dans votre banque, vous avez désormais \`${NEW_BANK_AMOUNT}\` dans votre banque"`,
  BANK_WITHDRAW_MONEY: (AMOUNT, NEW_BANK_AMOUNT) => `Vous venez de retirer\`${AMOUNT}$\` dans votre banque, vous avez désormais \`${NEW_BANK_AMOUNT}\` dans votre banque"`,

  // ROB
  ROB_ERROR_NOT_SAME_CITY: (PREFIX) => `Pour voler de l'argent à quelqu'un vous devez mentionner la personne, si elle est dans la même ville que vous alors vous volerez \`25%\` de son argent liquide\n**Mais..** si le membre n'est pas dans la même ville que vous alors vous devrez vous y rendre avec la commande \`${PREFIX}plane [town]\` pour pouvoir lui voler son argent`,
  ROB_ERROR_YOURSELF: "Vous ne pouvez pas vous voler à vous même",
  ROB_ERROR_MISSIG: "Vous avez oublier de préciser la cible",
  ROB_SUCCESS: (USER, AMOUNT) => `Vol réussi, en toute discression, vous avez dérober réussi à récuperer \`${AMOUNT}$\` sur \`${USER}\``,
  ROB_FAILED: (USER) => `\`${USER}\` vous a surpris, vous avez été(e) condamné à 2 heure de prison`,
  ROB_ERROR_VICTIM_MONEY: (USER) => `\`${USER}\` n'a pas asser d'argent sur lui, vous perdrez de l'energie pour rien`,

  // RENT
  RENT_ERROR_ENOUGHT_MONEY: "Vous n'avez pas assez d'argent sur votre compte bancaire pour payer le loyer.",
  RENT_SUCCESS_PAY: "Vous avez payé le loyer correctement !",
  RENT_ERROR_ALREADY: (PREFIX) => `Vous avez déjà un loyer, pour le changer, déménager dans une autre ville, ou vendre votre loyer avec... \`${PREFIX}rent sell\``,
  RENT_CHOOSED: (PREFIX) => `Votre appartement a été choisi, bienvenue chez vous, pour voir votre maison exécuter cette \`${PREFIX}rent\``,
  RENT_ALREADY_CHOOSEN: `L'appartement était déjà pris, cherchez-en un autre...`,
  RENT_FATIGUE: (PREFIX) => `Vous êtes fatigué de chercher un appartement, dormez (avec \${PREFIX}sleep\`) pour récupérer votre énergie`,
  RENT_ERROR_DONT_HAVE: (PREFIX) => `Vous n'avez pas encore d'appartement/maison, faites \`${PREFIX}rent buy\` pour en acheter un.`,
  RENT_SELLED: (PREFIX) => `Vous avez vendu votre appartement/maison, vous ne pourrez pas faire ce qui suit tant que vous n'aurez pas un nouveau logement :`,
  RENT_SELLED_0: `Voler l'argent des gens`,
  RENT_SELLED_1: `Effectuer des vols [UNIQUEMENT POUR LES GANGSTERS]`,

  // PLANE
  PLANE_MISSING_TOWN: (PREFIX) => `La ville à la quel vous voulez vous rendre n'existe pas, faite \`${PREFIX}towns list\``,
  PLANE_TICKET_CANT_BUY: "Vous n'avez pas assez d'argent pour vous payer un ticket d'avion pour ce vol",
  PLANE_FLY_START: (TRAJECT_TIME) => `🛫 L'avion s'envole, pour un trajet de \`${TRAJECT_TIME} heures\``,

  // PRISON
  PRISON_ERROR_IN: "Vous êtes en prison, attendez d'être libéré avant de pouvoir ré-exécuter les commandes RP.",
  PRISON_ERROR_IN_0: "Qui lance l'évasion ?",
  PRISON_ERROR_IN_1: "**»** Avant de lancer une évasion, il vous faudra débourser 2.000$ en espèces.\n",
  PRISON_ERROR_IN_2: `**»** Si vous n'avez pas assez d'argent et que vous voulez vous échapper, vous pouvez jouer aux cartes en misant de l'argent avec \`-cards [ammount]\`\n`,
  PRISON_ERROR_IN_3: "**»** Sachez que votre évasion peut échouer, si cela se produit, vous resterez 1 jour de plus en prison.\n",
  PRISON_ERROR_IN_4: "Après l'évasion ?",
  PRISON_ERROR_IN_5: "**»** Une fois sorti de prison, vous devrez contacter un membre de la mafia russe pour vous faire retirer de la liste des criminels évadés afin que vous puissiez reprendre votre travail et votre vie dans le jeu.\n",
  PRISON_ERROR_IN_6: "Qui contacte la mafia ?",
  PRISON_ERROR_IN_7: (PREFIX) => `**»** Faites \`${PREFIX}mafia\` cela vous coutera \`100$\`\n`,
  PRISON_EXIT: "Vous êtes sorti de prison, que ferez-vous en premier ?",
  PRISON_ESCAPED: "", // TODO
  PRISON_ESCAPED_FAILED: "", // TODO

  // PAY
  PAY_ERROR_MEMBER_NOT_DEFINED: "Vous n'avez pas précisé le membre à qui vous vouliez faire le virement.",
  PAY_ERROR_AMOUNT_NOT_DEFINED: "Vous n'avez pas précisé le montant que vous vouliez envoyer.",
  PAY_ERROR_DONT_HAVE_ENOUGH_MONEY: "Vous n'avez pas assez d'argent pour l'envoyer.",
  PAY_EMBED_DESCRIPTION: (AMOUNT, USER, MONEY) => `Vous avez envoyé \`${AMOUNT}$\` à \`${USER}\` avec succès.\nVous avez désormais \`${MONEY}$\` sur votre compte.`,

  // CARDS
  CARDS_ERROR_NOT_PRISON: "Vous devez être en prison pour éxécuter cette commande.",
  CARDS_ERROR_AMOUNT_NOT_PRECISED: "Vous n'avez pas précisé le montant à parier",
  CARDS_LOOSE: "Vous n'avez malheureusement pas gagner, retenter votre chance",
  CARDS_WIN: (AMOUNT, DEFAULT_AMOUNT) => `Félicitations, vous avez gagné \`${AMOUNT}$\` en pariant \`${DEFAULT_AMOUNT}$\``,
  CARDS_ERROR_NOT_ENOUGH_MONEY: (AMOUNT, USER_MONEY) => `Vous avez essayé de parié \`${AMOUNT}$\`, mais vous n'avez que \`${USER_MONEY}$\` sur votre compte`,

  // MAFIA
  MAFIA_ESCAPED_SUCCESS: "Vous avez appellé la mafia avec succès, cela vous aura couter `100$`",
  MAFIA_ERROR_NOT_ESCAPED: (PREFIX) => `Vous ne vous êtes pas échappé, faites \`${PREFIX}escape\` pour vous évader (coute \`2000$\`)`,

  // ESCAPE
  ESCAPE_ERROR_NOT_IN_PRISON: "Vous n'êtes pas en prison, vous ne pouvez donc pas vous évader",
  ESCAPE_ERROR_FAILED: "Vous avez échoué votre évasion, vous resterez donc `1 jour` de plus en prison",
  ESCAPE_SUCCESS: "Vous avez réussi votre évasion avec succès, que ferez vous maintenant ?"
}

const LANGS = {
  "FR": "Français",
  "ES": "Espagnol",
  "EN": "Anglais"
}

const translate = (key, ...args) => {
  const translation = texts[key];
  if(typeof translation === "function") return translation(...args);
  else return translation;
};

module.exports.translate = translate;