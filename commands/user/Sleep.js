const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game} = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    if(!USER.fatigue >= 50) return Embed.send(message.channel,message,Embed.SLEEP,LANG.translate("WORK_DONT_FATIGUE"), null, false, Embed.ERROR_COLOR)
    delFatigue(message.author.id,message.guild.id)

    // TODO: Cooldown hours
    await Embed.send(message.channel, message, Embed.SLEEP, LANG.translate("SLEEP_START"))
    return Embed.send(message.channel,message,Embed.SLEEP,LANG.translate("SLEEP_STOP"))
}

function delFatigue(member, guild){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {fatigue: 0});
}