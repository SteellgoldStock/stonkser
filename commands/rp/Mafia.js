const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if(!message.guild) return;
    Connection.query(`SELECT * FROM escapees WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, results, guildDB) {
        if (error) throw error;

        if (results.length > 0) {
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {money: parseInt(USER.money) - 100});
            return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("MAFIA_ESCAPED_SUCCESS"));
        }else{
            return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("MAFIA_ERROR_NOT_ESCAPED", guildDB[0].bot_prefix), null, false, Embed.ERROR_COLOR);
        }
    })
}