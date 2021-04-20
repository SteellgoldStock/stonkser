const Discord = require('discord.js')
const { Client, Version } = require('../Stonkser')

exports.INFOS = "Informations"
exports.ACCOUNT = "Compte"
exports.JOB = "Métier"
exports.ERROR = "Erreur"
exports.BANK = "Banque"
exports.STEAL = "Vol"

exports.ERROR_COLOR = "#bd6a6e"
exports.DEFAULT_COLOR = "#96bc6a"
exports.HOW_COLOR = "#f5e38b"

exports.send = async(Channel, Message, Title = exports.INFOS, Description = null, Array = null, showIcon = false, Color = exports.DEFAULT_COLOR, addBanner = false) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Stonkser • " + Title)
        .setTimestamp()
        .setFooter('Stonkser • ' + Version, Client.user.avatarURL())
        .setColor(Color)
    if(Description !== null){
        embed.setDescription(Description)
    }
    if(showIcon){
        embed.setThumbnail(Client.user.avatarURL())
    }
    if(Array !== null){
        Object.keys(Array).forEach(element => {
            embed.addField(Array[element]["title"], Array[element]["content"], Array[element]['inline'])
        });
    }
    if(addBanner){
        embed.setImage("https://cdn.discordapp.com/attachments/717441452136857601/834031120659513374/bannerST.png")
    }
    return Channel.send(embed)
}