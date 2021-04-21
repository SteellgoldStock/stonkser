const Discord = require("discord.js");
const { Embed, Connection, Config } = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_GUILD")) return Embed.send(message.channel, message,Embed.ERROR,"Vous n'avez pas la permission requise pour executer cette commande (`MANAGE_GUILD`)",null,false,Embed.Error,false)
    if(!args[0]) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("MISSING_ARGUMENTS", "Nouvelle langue"),null,false,Embed.ERROR_COLOR)
    if(Object.keys(Config["langs"]).includes(args[0])) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("CONFIG_ERROR_LANG_NOT_FOUND",args[0]),null,false,Embed.ERROR_COLOR)
    Connection.query(`UPDATE guilds SET ? WHERE guild_id = ${message.guild.id}`, {bot_lang: args[0]});
    return Embed.send(message.channel,message,Embed.INFOS,LANG.translate("CONFIG_LANG_UPDATE",args[0]));
}