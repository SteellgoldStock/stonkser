const Discord = require("discord.js");
const { Embed, Connection, Config } = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;
    const LANGS = ["FR", "EN"]

    if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_GUILD")) return Embed.send(message.channel, message,Embed.ERROR,LANG.translate("MISSING_PERMISSIONS","MANAGE_GUILD"),null,false,Embed.Error,false)
    if(!args[0]) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("MISSING_ARGUMENTS", "Langue"),null,false,Embed.ERROR_COLOR)

    if(!LANGS.includes(args[0])) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("CONFIG_ERROR_LANG_NOT_FOUND",args[0],"`FR`, `EN`, `ES`"),null,false,Embed.ERROR_COLOR)
    Connection.query(`UPDATE guilds SET ? WHERE guild_id = ${message.guild.id}`, {bot_lang: args[0]});

    const NEW_LANG = require('../../resources/langs/'+args[0])
    return Embed.send(message.channel,message,Embed.CONFIG,NEW_LANG.translate("CONFIG_LANG_UPDATE",args[0]));
}