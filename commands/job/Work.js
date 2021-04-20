const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game} = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    if(USER.fatigue >= 50) return Embed.send(message.channel,message,Embed.WORK,LANG.translate("WORK_FATIGUE_TOO_HIGH", PREFIX), null, false, Embed.ERROR_COLOR)

    switch (USER.job){
        case "chimist":
            const POTIONS = Math.round(getRandomInt(21) / 2) // FATIGUE COUNT
            const EARNED = POTIONS * 2
            addFatigue(message.author.id, message.guild.id, POTIONS, USER)
            addMoney(message.author.id,message.guild.id,EARNED,USER)
            return Embed.send(message.channel, message, Embed.WORK,LANG.translate("WORK_SUCCESS_CHIMIST", POTIONS, EARNED))
        case "clown":
        break;
    }
}

function addFatigue(member, guild, count, USER){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {fatigue: parseInt(USER.fatigue) + count});
}

function addMoney(member, guild, count, USER){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {money: parseInt(USER.money) + count});
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}