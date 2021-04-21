const Discord = require('discord.js')
const { Client, Version, Config, Connection } = require('../Stonkser')

exports.INFOS = "INFOS"
exports.ACCOUNT = "ACCOUNT"
exports.JOB = "JOB"
exports.ERROR = "ERROR"
exports.BANK = "BANK"
exports.STEAL = "STEAL"
exports.WORK = "WORK"
exports.RENT = "RENT"
exports.SLEEP = "SLEEP"
exports.PRISON = "PRISON"

exports.ERROR_COLOR = "#bd6a6e"
exports.DEFAULT_COLOR = "#96bc6a"
exports.HOW_COLOR = "#f5e38b"

exports.send = async(Channel, Message, Title = "INFOS", Description = null, Array = null, showIcon = false, Color = exports.DEFAULT_COLOR, addBanner = false, addCustomBanner = false) => {
    Connection.query(`SELECT bot_lang FROM guilds WHERE guild_id = ${Message.guild.id}`, function (error, guildDB) {
        const embed = new Discord.MessageEmbed()
            .setTitle(Config['embeds_titles'][Title][guildDB[0].bot_lang])
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
        }else if(addCustomBanner){
            embed.setImage(addCustomBanner)
        }
        return Channel.send(embed)
    });
}