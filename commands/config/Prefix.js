const Discord = require("discord.js");
const { Embed, Connection } = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_GUILD")) return Embed.send(message.channel, message,Embed.ERROR,LANG.translate("MISSING_PERMISSIONS","MANAGE_GUILD"),null,false,Embed.Error,false)
    if(!args[0]) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("ERROR_ARGUMENT"),null,false,Embed.ERROR_COLOR);
    if(args[0].length > 3) return Embed.send(message.channel,message,Embed.ERROR,LANG.translate("MAXIMAL_CHARACTERS",3),null,false,Embed.ERROR_COLOR);
    Connection.query(`UPDATE guilds SET ? WHERE guild_id = ${message.guild.id}`, {bot_prefix: args[0]});
    return Embed.send(message.channel,message,Embed.INFOS,LANG.translate("CONFIG_PREFIX_UPDATE",args[0]));
}