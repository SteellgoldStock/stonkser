const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    if(USER.prison_time === null) return Embed.send(message.channel, message,Embed.PRISON,LANG.translate("CARDS_ERROR_NOT_PRISON"), null, false, Embed.ERROR_COLOR)
    if(!args[0]) return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("CARDS_ERROR_AMOUNT_NOT_PRECISED"), null, false, Embed.ERROR_COLOR)
    if(USER.money < args[0]) return Embed.send(message.channel, message, Embed.PRISON,LANG.translate("CARDS_ERROR_AMOUNT_BIG"),null,false,Embed.ERROR_COLOR)

    const LUCK = getRandomInt(2);
    if(LUCK !== 1){
        Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) - args[0]});
        return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("CARDS_LOOSE"));
    }

    if(!USER.money > args[0]) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("CARDS_ERROR_NOT_ENOUGH_MONEY", args[0], USER.money), null, false, Embed.ERROR_COLOR)
    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) + (args[0] * 2)});
    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("CARDS_WIN", args[0] * 2, args[0]));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}