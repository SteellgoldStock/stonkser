const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    if(USER.prison_time === null) return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("ESCAPE_ERROR_NOT_IN_PRISON"), null, false, Embed.ERROR_COLOR);
    const LUCK = getRandomInt(2);
    if(LUCK !== 1){
        Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {prison_time: (parseInt(USER.prison_time) + 86400000)})
        return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("ESCAPE_ERROR_FAILED"), null, false, Embed.ERROR_COLOR);
    }

    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {prison_time: null})
    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("ESCAPE_SUCCESS"))
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}