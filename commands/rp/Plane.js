const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game } = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWNS, LANG) => {
    if(!message.guild) return;

    if(!args[0]) return Embed.send(message.channel, message,Embed.INFOS,LANG.translate("PLANE_MISSING_TOWN"),null,false,Embed.ERROR_COLOR)

    console.log(TOWNS.list)
    if(!TOWNS.list.includes(args[0])) return Embed.send(message.channel, message,Embed.INFOS,LANG.translate("PLANE_MISSING_TOWN"),null,false,Embed.ERROR_COLOR)

    // TODO: Verif si le joueur a payé son loyer avant de déménager

    const TICKET_PRICE = TOWNS["towns"][args[0]]["ticket"]
    Time.getTime(true,{
        hours: TOWNS["towns"][args[0]]["traject"],
        minutes: 0,
        seconds: 0
    }, true).then(value => {
        Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {traject_end: value})
        if(!USER.money >= TICKET_PRICE) return Embed.send(message.channel, message, Embed.INFOS, LANG.translate("PLANE_TICKET_CANT_BUY"),null,false,Embed.ERROR_COLOR)
        return Embed.send(message.channel, message, Embed.INFOS, LANG.translate("PLANE_FLY_START", TOWNS["towns"][args[0]]["traject"]),null,false,Embed.DEFAULT_COLOR)
    })
}