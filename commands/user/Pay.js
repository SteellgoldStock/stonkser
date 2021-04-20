const Discord = require("discord.js");
const { Client, Colors, Connection, Version, Embed} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;
    const victim = message.mentions.members.first();
    if(!victim) return Embed.send(message.channel, message, Embed.BANK, LANG.translate("PAY_ERROR_MEMBER_NOT_DEFINED"), null, false, Embed.ERROR_COLOR);
    const money = args[1];
    if(!money) return Embed.send(message.channel, message, Embed.BANK, LANG.translate("PAY_ERROR_AMOUNT_NOT_DEFINED"), null, false, Embed.ERROR_COLOR);
    if(USER.money + USER.money_bank >= args[1]) {
        Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) - parseInt(args[1])});
        Connection.query(`UPDATE users SET ? WHERE user_id = ${victim.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) + parseInt(args[1])});
        return Embed.send(message.channel, message, Embed.BANK, LANG.translate("PAY_EMBED_DESCRIPTION", money, victim.user.username));
    }else{
        return Embed.send(message.channel, message, Embed.BANK, LANG.translate("PAY_ERROR_DONT_HAVE_ENOUGH_MONEY"), null, false, Embed.ERROR_COLOR);
    }
}