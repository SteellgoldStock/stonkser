const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Commands} = require("../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if(!message.guild) return;

    exports.economy = ""
    exports.economyCount = 0
    Object.keys(Commands["economy"]).forEach(element => {
        exports.economyCount += 1
        exports.economy += "`"+ Commands["economy"][element]["name"] +"` **»** "+ Commands["economy"][element]["description"] +".\n"
    });

    exports.informations = ""
    exports.informationsCount = 0
    Object.keys(Commands["informations"]).forEach(element => {
        exports.informationsCount += 1
        exports.informations += "`"+ Commands["informations"][element]["name"] +"` **»** "+ Commands["informations"][element]["description"] +".\n"
    });

    exports.configurations = ""
    exports.configurationsCount = 0
    Object.keys(Commands["configurations"]).forEach(element => {
        exports.configurationsCount += 1
        exports.configurations += "`"+ Commands["configurations"][element]["name"] +"` **»** "+ Commands["configurations"][element]["description"] +".\n"
    });

    Embed.send(message.channel,message,LANG.translate("HELP_EMBED_TITLE"),LANG.translate("HELP_EMBED_DESCRIPTION",PREFIX),{
        0: {
            "title": LANG.translate("HELP_EMBED_CATEGORY_ECONOMY_TITLE", exports.economyCount),
            "content": exports.economy,
            "inline": false
        },
        1: {
            "title": LANG.translate("HELP_EMBED_CATEGORY_INFORMATIONS_TITLE", exports.economyCount),
            "content": exports.informations,
            "inline": false
        },
        2: {
            "title": LANG.translate("HELP_EMBED_CATEGORY_CONFIGURATIONS_TITLE", exports.economyCount),
            "content": exports.configurations,
            "inline": false
        }
    },false,Embed.DEFAULT_COLOR,true)
}