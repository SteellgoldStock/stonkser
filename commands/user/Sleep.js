const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game, Time} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    if(!USER.fatigue >= 50) return Embed.send(message.channel,message,Embed.SLEEP,LANG.translate("WORK_DONT_FATIGUE"), null, false, Embed.ERROR_COLOR)

    Time.getTime(true, {
        hours: 0,
        minutes: 1,
        seconds: 0
    },true).then(value => {
        delFatigue(message.author.id,message.guild.id)
        Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, { sleeping_time: value });
        return Embed.send(message.channel, message, Embed.SLEEP, LANG.translate("SLEEP_START"))
    })
}

function delFatigue(member, guild){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {fatigue: 0});
}