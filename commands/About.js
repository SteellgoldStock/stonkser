const Discord = require("discord.js");
const { Client, Colors, Version, Embed} = require("../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    return Embed.send(message.channel, message, Embed.INFOS, LANG.translate("ABOUT_EMBED_DESCRIPTION"), {
        0: {
            "title": LANG.translate("ABOUT_EMBED_FIELD_TITLE"),
            "content": LANG.translate("ABOUT_EMBED_FIELD_CONTENT"),
            "inline": true
        }
    }, false, Embed.HOW_COLOR, true)
}