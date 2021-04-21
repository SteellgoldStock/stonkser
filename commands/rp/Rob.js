const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game } = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;

    const stealer = message.guild.members.cache.get(message.author.id)
    const victim_user = message.mentions.members.first();
    if(!victim_user) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("ROB_ERROR_MISSIG"),null,false,Embed.ERROR_COLOR)

    const guild_id = victim_user.guild.id

    if(stealer.id === victim_user.id) return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_ERROR_YOURSELF"),null,false,Embed.ERROR_COLOR)
    const RANDOM = getRandomInt(3)

    if(RANDOM === 2){
        Connection.query(`SELECT * FROM users WHERE user_id = ${victim_user.id} AND guild_id = ${message.guild.id}`, function (error, robbed_user) {
            if (error) throw error;
            if(!robbed_user[0].money <= 20){
                const DERROBED = Math.round(parseInt(robbed_user[0].money) / 4)
                Connection.query(`UPDATE users SET ? WHERE user_id = ${victim_user.id} AND guild_id = ${message.guild.id}`, {money: parseInt(robbed_user[0].money) - DERROBED})
                Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) + DERROBED})
                return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_SUCCESS", victim_user.user.username,DERROBED),null,false,Embed.DEFAULT_COLOR)
            }else{
                return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_ERROR_VICTIM_MONEY",victim_user.user.username))
            }
        });
    }else{
        Time.getTime(true,{
            hours: 2,
            minutes: 0,
            seconds: 0
        }, true).then(value => {
            console.log(value)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {
                prison_time: value
            });
        })
        return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_FAILED",victim_user.user.username),null,false,Embed.ERROR_COLOR)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}