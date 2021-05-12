const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game, Config} = require("../../Stonkser");
const Time = require('../../managers/Time')
const Rents = require('../../resources/Rents.json')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    switch(args[0]) {
        default:
            if(USER.rent === "none") return Embed.send(message.channel, message, Embed.ERROR,LANG.translate("RENT_ERROR_DONT_HAVE", PREFIX), null, false, Embed.ERROR_COLOR, false, false)
            return Embed.send(message.channel, message, Embed.RENT,":warning: Vous devez payer votre loyer !",{
                    0: {
                        "title": "Loyer",
                        "content": "Prix: `" + TOWN["towns"][USER.town]["rent"] + "$`\n" +
                            "Localisation: `" + TOWN["towns"][USER.town]["name"] +"`",
                        "inline":false
                    }
                },false,Embed.DEFAULT_COLOR,false, Rents[USER.rent])

        case "pay":
            const price = TOWN["towns"][USER.town]["rent"]
            // TODO: Fonction avec le temp pour savoir si il doit payer le loyer
            if(USER.money_bank < price) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("RENT_ERROR_ENOUGHT_MONEY"),null,false,Embed.ERROR_COLOR)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`,{
                money_bank: Math.round(parseInt(USER.money_bank) - parseInt(price))
            });

            return Embed.send(message.channel, message, Embed.RENT, LANG.translate("RENT_SUCCESS_PAY"),null,false,Embed.DEFAULT_COLOR,false,Config.images_web + "DO5Vl.jpg")
            // TODO: Faire une condition si il doit payer son appart ou non donc pas faire qu'il puisse payer 10 fois en envoyant les commandes
        case "b":
        case "buy":
            if(USER.rent !== "none") return Embed.send(message.channel, message, Embed.ERROR,LANG.translate("RENT_ERROR_ALREADY", PREFIX),null,false,Embed.ERROR_COLOR,false,false)

            if(USER.fatigue >= 10) return Embed.send(message.channel, message, Embed.ERROR,LANG.translate("RENT_FATIGUE", PREFIX),null,false,Embed.ERROR_COLOR,false,false)

            const File = Object.keys(Rents)
            const Random = Math.floor(Math.random() * File.length)
            const Rent = Rents[Random]

            Connection.query(`SELECT * FROM users WHERE guild_id = ${message.guild.id} AND rent = ${Random}`, null, function (error, results) {
                if (error) throw error
                if(results.length > 0){
                    addFatigue(message.author.id,message.guild.id,1,USER)
                    return Embed.send(message.channel, message, Embed.RENT, LANG.translate("RENT_ALREADY_EXIST"),null,false,Embed.ERROR_COLOR)
                }

                if(USER.money >= TOWN[USER.town]["rent"]){
                    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {rent: Random, money: parseInt(USER.money) - parseInt(TOWN["towns"][USER.town]["rent"])});
                    return Embed.send(message.channel, message, Embed.RENT, LANG.translate("RENT_CHOOSED", PREFIX),null,false, Embed.DEFAULT_COLOR,false,Rent)
                }else{
                    return
                }
            });
            break
        case "s":
        case "sell":
            if(USER.rent === "none") return Embed.send(message.channel, message, Embed.ERROR,LANG.translate("RENT_ERROR_DONT_HAVE", PREFIX), null, false, Embed.ERROR_COLOR, false, false)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {rent: "none", money: parseInt(USER.money) + parseInt(TOWN["towns"][USER.town]["rent"])});
            return Embed.send(message.channel, message, Embed.RENT,LANG.translate("RENT_SELLED"), {
                0: {
                    "title": "Actions",
                    "content": LANG.translate("RENT_SELLED_0") + "\n"+
                        LANG.translate("RENT_SELLED_1"),
                    "inline": false
                }
            }, false, Embed.DEFAULT_COLOR, false, false)
    }
}

function addFatigue(member, guild, count, USER){
    Connection.query(`UPDATE users SET ? WHERE user_id = ${member} AND guild_id = ${guild}`, {fatigue: parseInt(USER.fatigue) + count});
}