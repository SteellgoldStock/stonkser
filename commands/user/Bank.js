const Discord = require("discord.js");
const {Client, Colors, Version, Embed, Connection, Game} = require("../../Stonkser");
const Time = require('../../managers/Time')

module.exports.run = async (Client, message, args, User, Jobs, Towns, LANG) => {
    if (!message.guild) return;

    switch (args[0]) {
        default:
            return Embed.send(message.channel, message, Embed.BANK, "Votre compte en banque est à `" + User.money_bank + "$`, cet argent est sécuriser et vous ne pourrez pas vous le faire voler (Sauf en cas de braquage)");
        case "d":
        case "deposit":
            if (!args[1]) return Embed.send(message.channel, message, Embed.ERROR, "Vous n'avez pas préciser le montant du dépôt", null, false, Embed.ERROR_COLOR)
            if (!args[1] > User.money) return Embed.send(message.channel, message, Embed.ERROR, "Vous n'avez assez d'argent pour déposer cette somme", null, false, Embed.ERROR_COLOR)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money_bank: parseInt(User.money_bank) + parseInt(args[1]), money: parseInt(User.money) - parseInt(args[1])});
            return Embed.send(message.channel, message, Embed.BANK, LANG.translate("BANK_DEPOSIT_MONEY", args[1], (parseInt(User.money_bank) + parseInt(args[1]))), null, false)
        case "w":
        case "withdraw":
            if (!args[1]) return Embed.send(message.channel, message, Embed.ERROR, "Vous n'avez pas préciser le montant du retrait", null, false, Embed.ERROR_COLOR)
            if (args[1] > User.money_bank) return Embed.send(message.channel, message, Embed.ERROR, "Vous n'avez assez d'argent en banque pour retirer cette somme", null, false, Embed.ERROR_COLOR)
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money_bank: parseInt(User.money_bank) - parseInt(args[1]), money: parseInt(User.money) + parseInt(args[1])});
            return Embed.send(message.channel, message, Embed.BANK, LANG.translate("BANK_WITHDRAW_MONEY", args[1],(parseInt(User.money_bank) - parseInt(args[1]))), null, false)
    }
}