const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game} = require("../../Stonkser");
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

    }
}