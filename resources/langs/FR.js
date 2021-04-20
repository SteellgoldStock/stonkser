const texts = {
  FILE_LANG_FOR: "FR",

  MISSING_ARGUMENTS: (ARGUMENT) => `L'argument \`${ARGUMENT}\` n'est pas défini`,
  MAXIMAL_CHARACTERS: (MAXIMAL_CHARACTERS) => `Vous avez mis plus de caractères que le nombre maximum (\`${MAXIMAL_CHARACTERS}\`)`,
  MISSING_PERMISSIONS: (PERMISSION) => `Vous n'avez pas la permission requise pour executer ceci (\`${PERMISSION}\`)`,

  // ABOUT
  JOB_ERROR: "Vous n'avez pas encore de travail",
  JOB_HAS_ONE: (JOB, JOBJOINDATE) => `Vous travaillez dans une entreprise de \`${JOB}\`, vous avez rejoin ce travail le \`${JOBJOINDATE}\``,
  JOB_RANDOM_TIP: (MIN, MAX) => `Pourboire aléatoire entre ${MIN}$ et ${MAX}$`,
  JOB_NOT_PRECISED: "Vous devez préciser le métier au quel vous voulez voir ces informations\n- Exemple: `-job i chimist`",
  JOB_DONT_EXIST: "Le métier que vous venez de préciser n'existe pas, mais vous pouvez en faire une suggestion avec la commande `-suggest [text]`",
  JOB_INFORMATIONS_EMBED_TITLE: (JOB) => `Informations sur le métier de ${JOB}`,
  JOB_INFORMATIONS_EMBED_CONTENT: (SALARY, ACTION) => `Payé(e) \`${SALARY}$\` par ${ACTION}`,
  JOB_INFORMATIONS_EMBED_BENEFITS: (BENEFITS) => `\n\n**Avantages**: ${BENEFITS}`,
  JOB_INFORMATIONS_EMBED_DISADVANTAGES: (DISADVANTAGES) => `\n**Inconvénients**: ${DISADVANTAGES}`,
  JOB_JOBS_LIST: "Liste des métiers",
  JOB_CHIMIST: (SALARY) => `🧪 - Chimiste [${SALARY}$/Potions vendues]\n`,
  JOB_CLOWN: (SALARY) => `🎈 - Clown [${SALARY}$/Anniversaires]\n`,
  JOB_PLUMBER: (SALARY) => `⚒ - Plombier [${SALARY}$/Réparations]\n`,
  JOB_ICESELLER: (SALARY) => `🍨 - Vendeur de glace [${SALARY}$/Glaces vendues]\\n`,
  JOB_BANKER: "💵 - Banquier [Voir informations]\n",
  JOB_KILLER: "🔪 - Tueur en série [En fonction de la prime sur la personne]",
  JOB_JOINED_SUCCESS: (JOB) => `Vous avez rejoin une entreprise exerçant le métier de \`${JOB}\``,
  JOB_LEAVED_SUCCESS: (JOB) => `Vous avez démissioner d'une entreprise exerçant le métier de \`${JOB}\``,
  JOB_NOT_PRECISED_FOR_JOIN: "Vous n'avez pas préciser le métier que vous voulez rejoindre, pour en avoir la liste, faites `-job list`",
  JOB_NEED_TO_LEAVE_TO_CHANGE: "Vous avez déjà un métier, faites `-job leave` pour quitter votre travail.",
  JOB_CANT_LEAVE_BECAUSE_DONT_HAVE_JOB: "Vous n'avez pas de métier, faites `-job join [job]` pour rejoindre un travail.",

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
  ROB_ERROR_VICTIM_MONEY: (USER) => `\`${USER}\` n'a pas asser d'argent sur lui, vous perdrez de l'energie pour rien`,

  // PLANE
  PLANE_MISSING_TOWN: (PREFIX) => `La ville à la quel vous voulez vous rendre n'existe pas, faite \`${PREFIX}towns list\``,
  PLANE_TICKET_CANT_BUY: "Vous n'avez pas assez d'argent pour vous payer un ticket d'avion pour ce vol",
  PLANE_FLY_START: (TRAJECT_TIME) => `🛫 L'avion s'envole, pour un trajet de \`${TRAJECT_TIME} heures\``,

  // PRISON
  PRISON_ERROR_IN: "Vous êtes en prison, attendez d'être libérer avant de pouvoir ré-executer des commandes RP",
  PRISON_EXIT: "Vous êtes sorti(e) de prison, qu'allez vous faire en premier ?",
  PRISON_ESCAPED: "", // TODO
  PRISON_ESCAPED_FAILED: "", // TODO

  // PAY
  PAY_ERROR_MEMBER_NOT_DEFINED: "Vous n'avez pas précisé le membre à qui vous vouliez faire le virement.",
  PAY_ERROR_AMOUNT_NOT_DEFINED: "Vous n'avez pas précisé le montant que vous vouliez envoyer.",
  PAY_ERROR_DONT_HAVE_ENOUGH_MONEY: "Vous n'avez pas assez d'argent pour l'envoyer.",
  PAY_EMBED_DESCRIPTION: (AMOUNT, USER) => `Vous avez envoyé \`${AMOUNT}$\` à \`${USER}\` avec succès.`
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