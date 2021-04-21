const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game, Config} = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX) => {
    if (!message.guild) return;

    switch(args[0]) {
        default:
            return Embed.send(message.channel, message, "Appartement",":warning: Vous devez payer votre loyer !",{
                    0: {
                        "title": "Loyer",
                        "content": "Prix: `" + TOWN["towns"][USER.town]["rent"] + "$`\n" +
                            "Localisation: `" + TOWN["towns"][USER.town]["name"] +"`",
                        "inline":false
                    }
                },false,Embed.DEFAULT_COLOR,false, "https://i.goopics.net/W9w2q.jpg")

        case "pay":
            const price = TOWN["towns"][USER.town]["rent"]
            // TODO: Fonction avec le temp pour savoir si il doit payer le loyer
            if(USER.money_bank < price) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("RENT_ERROR_ENOUGHT_MONEY"),null,false,Embed.ERROR_COLOR)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`,{
                money_bank: Math.round(parseInt(USER.money_bank) - parseInt(price))
            });
            return Embed.send(message.channel, message, "Appartement", LANG.translate("RENT_SUCCESS_PAY"),null,false,Embed.DEFAULT_COLOR,false,Config.images_web + "DO5Vl.jpg")
            // TODO: Faire une condition si il doit payer son appart ou non donc pas faire qu'il puisse payer 10 fois en envoyant les commandes
    }
}