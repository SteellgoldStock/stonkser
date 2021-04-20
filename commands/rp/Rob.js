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
                return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_SUCCESS", victim_user.user.username,DERROBED),null,false)
            }else{
                return Embed.send(message.channel,message,Embed.STEAL,LANG.translate("ROB_ERROR_VICTIM_MONEY",victim_user.user.username))
            }
        });
    }else{
        Connection.query(`INSERT INTO prison SET ?`, {
            user_id: message.author.id,
            guild_id: message.guild.id,
            expiration: await Time.getTime(true,60)
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}