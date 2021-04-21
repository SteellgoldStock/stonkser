const texts = {
  FILE_LANG_FOR: "EN",

  MISSING_ARGUMENTS: (ARGUMENT) => `The argument \`${ARGUMENT}\` is not defined`,
  MAXIMAL_CHARACTERS: (MAXIMAL_CHARACTERS) => `You have put more characters than the maximum number (\`${MAXIMAL_CHARACTERS}\`)`,
  MISSING_PERMISSIONS: (PERMISSION) => `You do not have the required permission to execute this (\`${PERMISSION}\`)`,

  // JOB
  JOB_ERROR: "You don't have a job yet",
  JOB_HAS_ONE: (JOB, JOBJOINDATE) => `You work in a company of \`${JOB}\`, you joined this job on \`${JOBJOINDATE}\``,
  JOB_RANDOM_TIP: (MIN, MAX) => `Random tip between ${MIN}$ and ${MAX}$`,
  JOB_NOT_PRECISED: (PREFIX) => `You must specify the job for which you want to see this information\n- Example: \`${PREFIX}job i chimist\``,
  JOB_DONT_EXIST: (PREFIX) =>  `The job you just specified does not exist, but you can make a suggestion with the command \`${PREFIX}suggest [text]\``,
  JOB_INFORMATIONS_EMBED_TITLE: (JOB) => `Information on the profession of ${JOB}`,
  JOB_INFORMATIONS_EMBED_CONTENT: (SALARY, ACTION) => `Paid \`${SALARY}$\` by ${ACTION}`,
  JOB_INFORMATIONS_EMBED_BENEFITS: (BENEFITS) => `\n\n**Benefits**: ${BENEFITS}`,
  JOB_INFORMATIONS_EMBED_DISADVANTAGES: (DISADVANTAGES) => `\n**Disadvantages**: ${DISADVANTAGES}`,
  JOB_JOBS_LIST: "Liste des métiers",
  JOB_CHIMIST: (SALARY) => `🧪 - Chemist [${SALARY}$/Potions sold]\n`,
  JOB_CLOWN: (SALARY) => `🎈 - Clown [${SALARY}$/Birthdays]\n`,
  JOB_PLUMBER: (SALARY) => `⚒ - Plumber [${SALARY}$/Repairs]\n`,
  JOB_ICESELLER: (SALARY) => `🍨 - Ice cream vendor [${SALARY}$/Ice cream sold]\n`,
  JOB_BANKER: "💵 - Banker [See information]\n",
  JOB_KILLER: "🔪 - Serial Killer [According to the premium on the person]",
  JOB_JOINED_SUCCESS: (JOB) => `You have joined a company in the business of \`${JOB}\``,
  JOB_LEAVED_SUCCESS: (JOB) => `You have resigned from a company in the business of \`${JOB}\``,
  JOB_NOT_PRECISED_FOR_JOIN: "You did not specify the job you want to join, to have the list, do `-job list`",
  JOB_NEED_TO_LEAVE_TO_CHANGE: "You already have a job, do `-job leave` to leave your job.",
  JOB_CANT_LEAVE_BECAUSE_DONT_HAVE_JOB: "You don't have a job, do `-job join [job]` to join a job.",

  // WORK
  WORK_FATIGUE_TOO_HIGH: (PREFIX) => `You are too tired to work, recover by sleeping (\`${PREFIX}sleep\`)`,
  WORK_SUCCESS_CHIMIST: (COUNT, EARNED) => `🧪 You have just sold \`${COUNT} potions\` that you have just created, you have won \`${EARNED}$\``,
  WORK_DONT_FATIGUE: "You are not tired!",

  // SLEEP
  SLEEP_START:  `Good night, we'll see you in \`8 hours\` !`,
  SLEEP_STOP: `Bonjour, avez-vous bien dormi(e) ?`,

  // ABOUT
  ABOUT_EMBED_DESCRIPTION: "Stonsker is a bot created to recreate a complete economy with 4 cities : Nussdorfer,  Montreal, Paris, New-York, you will have several jobs, each with its own purpose in society.",
  ABOUT_EMBED_FIELD_TITLE: "Why Stonsker ?",
  ABOUT_EMBED_FIELD_CONTENT: "The name of Stonkser, was used for this bot because it recreates an economy",

  // HELP
  HELP_EMBED_TITLE: "Informations",
  HELP_EMBED_DESCRIPTION: (PREFIX) => `The prefix is \`${PREFIX}\` on this server**PRO TIP**: Do \`${PREFIX}help i [command]\` to get more information about the command`,
  HELP_EMBED_CATEGORY_ECONOMY_TITLE: (count) => `Economy category (${count})`,
  HELP_EMBED_CATEGORY_INFORMATIONS_TITLE: (count) => `Informations category (${count})`,
  HELP_EMBED_CATEGORY_CONFIGURATIONS_TITLE: (count) => `Configurations category (${count})`,

  // CONFIG
  CONFIG_PREFIX_UPDATE: (PREFIX) => `You have just changed the prefix of this server, now you must use \`${PREFIX}\` !`,
  CONFIG_LANG_UPDATE: (LANG) => `You have just changed the language of the bot on this server, now the bot will speak to you in \`${LANGS[LANG]}\` !`,
  CONFIG_ERROR_LANG_NOT_FOUND: (LANG) => `The language \`${LANG}\` does not exist, so I put you back on the language defined later`,

  // ACCOUNT
  ACCOUNT_ERROR_NO_JOB: "No job",
  ACCOUNT_ARRAY_TITLE: "You account",
  ACCOUNT_USER_MONEY: (MONEY) => `You have : \`${MONEY}$\` `,
  ACCOUNT_USER_MONEY_BANK: (MONEY) => `You have : \`${MONEY}$\` in your bank`,
  ACCOUNT_USER_JOB: (JOB) => `Your job is \`${JOB}\`\n`,
  ACCOUNT_USER_TOWN: (TOWN, RENT) => `Your rent is at \`${TOWN}\` for \`${RENT}$/month\``,
  ACCOUNT_RENT_PAY: "🏡 You must pay your rent ! (`-rent pay`)",

  // BANK
  BANK_DEPOSIT_MONEY: (AMOUNT, NEW_BANK_AMOUNT) => `You have just deposited \`${AMOUNT}$\` in your bank, you now have \`${NEW_BANK_AMOUNT}\` in your bank"`,
  BANK_WITHDRAW_MONEY: (AMOUNT, NEW_BANK_AMOUNT) => `You have just withdrawn\`${AMOUNT}$\` in your bank, you now have \`${NEW_BANK_AMOUNT}\` in your bank"`,

  // ROB
  ROB_ERROR_NOT_SAME_CITY: (PREFIX) => `To steal money from someone you have to mention the person, if he is in the same town as you then you will steal his cash...** if the member is not in the same town as you then you will have to go there with the command \`${PREFIX}plane [town]\` in order to steal his money`,
  ROB_ERROR_YOURSELF: "You can't steal from yourself",
  ROB_ERROR_MISSIG: "You forgot to specify the target",
  ROB_SUCCESS: (USER, AMOUNT) => `Successful theft, in all discretion, you have succeeded in recovering \`${AMOUNT}$\` on \`${USER}\``,
  ROB_ERROR_VICTIM_MONEY: (USER) => `\`${USER}\` doesn't have enough money on him, you will waste energy for nothing`,

  // RENT
  RENT_ERROR_ENOUGHT_MONEY: "You do not have enough money in your bank account to pay the rent",
  RENT_SUCCESS_PAY: "You have paid the rent correctly!",
  RENT_ERROR_ALREADY: (PREFIX) => `You have already a rent, to change move to a another town, or sell your rent with \`${PREFIX}rent sell\``,
  RENT_CHOOSED: (PREFIX) => `Your apartment has been chosen, welcome home, to see your home execute this \`${PREFIX}rent\``,
  RENT_ALREADY_CHOOSEN: `The apartment was already taken, look for another one...`,
  RENT_FATIGUE: (PREFIX) => `You are tired of looking for an apartment, sleep (with \`${PREFIX}sleep\`) to recover your energy`,
  RENT_ERROR_DONT_HAVE: (PREFIX) => `You don't have an apartment/house yet, do \`${PREFIX}rent buy\` to buy one`,
  RENT_SELLED: (PREFIX) => `You have been selled your apartment/house, you will not be able to do the following until you have a new home:`,
  RENT_SELLED_0: `Rob money from people`,
  RENT_SELLED_1: `Carrying out robberies [GANGSTER ONLY]`,

  // PLANE
  PLANE_MISSING_TOWN: (PREFIX) => `The city you want to go to doesn't exist, so make \`${PREFIX}towns list`,
  PLANE_TICKET_CANT_BUY: "Vous n'avez pas assez d'argent pour vous payer un ticket d'avion pour ce vol",
  PLANE_FLY_START: (TRAJECT_TIME) => `🛫 The plane takes off, for a journey of ${TRAJECT_TIME} hours.`,

  // PRISON
  PRISON_ERROR_IN: "You are in jail, wait to be released before you can re-execute RP commands",
  PRISON_ERROR_IN_0: "Who launch escape ?",
  PRISON_ERROR_IN_1: "**»** Before launching an escape it will cost you `2.000$` in cash\n",
  PRISON_ERROR_IN_2: `**»** If you don't have enough money and want to escape you can play cards by betting money with \`-cards [ammount]\`\n`,
  PRISON_ERROR_IN_3: "**»** Know that your escape can fail, if this happens, you will stay 1 more day in prison\n",
  PRISON_ERROR_IN_4: "After the escape ?",
  PRISON_ERROR_IN_5: "**»** Once out of prison, you will have to contact a member of the Russian mafia to get you off the list of escaped criminals so that you can resume your work and your life in the game\n",
  PRISON_ERROR_IN_6: "How contact the mafia ?",
  PRISON_ERROR_IN_7: (PREFIX) => `**»** Do \`${PREFIX}mafia\` it will cost you \`100$\`\n`,
  PRISON_EXIT: "You are out of prison, what will you do first?",
  PRISON_ESCAPED: "", // TODO
  PRISON_ESCAPED_FAILED: "", // TODO

  // PAY
  PAY_ERROR_MEMBER_NOT_DEFINED: "You did not specify the member to whom you wanted to make the transfer.",
  PAY_ERROR_AMOUNT_NOT_DEFINED: "You did not specify the amount you wanted to send.",
  PAY_ERROR_DONT_HAVE_ENOUGH_MONEY: "You don't have enough money to send it.",
  PAY_EMBED_DESCRIPTION: (AMOUNT, USER, MONEY) => `You have successfully sent ${AMOUNT}$ to ${USER}.\nYou now have ${MONEY}$ on your account.`
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