const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game} = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    if(USER.fatigue >= 50) return Embed.send(message.channel,message,Embed.WORK,LANG.translate("WORK_FATIGUE_TOO_HIGH", PREFIX), null, false, Embed.ERROR_COLOR)

    switch (USER.job){
        case "chimist":
            const POTIONS = Math.round(getRandomInt(21) / 2) // FATIGUE COUNT
            const EARNED_CHIMIST = POTIONS * 2
            addFatigue(message.author.id, message.guild.id, POTIONS, USER)
            addMoney(message.author.id,message.guild.id,EARNED_CHIMIST,USER)
            return Embed.send(message.channel, message, Embed.WORK,LANG.translate("WORK_SUCCESS_CHIMIST", POTIONS, EARNED_CHIMIST))
        case "clown":
            const BIRTHDAYS = Math.round(getRandomInt(8 / 2)) // Birthdays Count
            const EARNED_CLOWN = BIRTHDAYS * 30
            addFatigue(message.author.id, message.guild.id, BIRTHDAYS, USER)
            addMoney(message.author.id,message.guild.id,EARNED_CLOWN,USER)

            return Embed.send(message.channel, message, Embed.WORK,LANG.translate("WORK_SUCCESS_CLOWN", BIRTHDAYS, EARNED_CLOWN))
        case "plumber":
            const REPAIRS = Math.round(getRandomInt(12 / 2))
            const EARNED_PLUMBER = REPAIRS * 60
            addFatigue(message.author.id, message.guild.id, REPAIRS, USER)
            addMoney(message.author.id,message.guild.id, EARNED_PLUMBER,USER)
            return Embed.send(message.channel, message, Embed.WORK,LANG.translate("WORK_SUCCESS_PLUMBER", REPAIRS, EARNED_PLUMBER))
    }
}

function addFatigue(member, guild, count, USER){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {fatigue: parseInt(USER.fatigue) + count});
}

function addMoney(member, guild, count, USER){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {money_bank: parseInt(USER.money_bank) + count});
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}