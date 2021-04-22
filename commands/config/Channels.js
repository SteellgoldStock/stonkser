const Discord = require("discord.js");
const { Embed, Connection, Config } = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG, PREFIX, GUILD_DB) => {
    if (!message.guild) return;

    if (!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_GUILD")){
        return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("MISSING_PERMISSIONS", "MANAGE_GUILD"), null, false, Embed.ERROR_COLOR, false)
    }

    if (!args[0]) await Embed.send(message.channel, message, Embed.CONFIG, LANG.translate("CHANNELS_HELP_DESCRIPTION"), {
        0: {
            "title": LANG.translate("CHANNELS_HELP_HOW"),
            "content": LANG.translate("CHANNELS_HELP_LIST", PREFIX) + LANG.translate("CHANNELS_HELP_ADD", PREFIX) + LANG.translate("CHANNELS_HELP_DEL", PREFIX),
            "inline": false
        }
    }, false)

    if(!["add","del","list"].includes(args[0])) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("NO_FOUND_OPTION"), null, false, Embed.ERROR_COLOR, false)
    if (!args[1] && ["add","del"].includes(args[0])) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("MENTIONS_ERROR_CHANNEL", "MANAGE_GUILD"), null, false, Embed.ERROR_COLOR, false)

    const channels = GUILD_DB["channels"].split(' ')

    const mentionedChannel = message.mentions.channels.first();
    switch (args[0]){
        case "a":
        case "add":
            channels.push(mentionedChannel.id)
            Connection.query(`UPDATE guilds SET ? WHERE guild_id = ${message.guild.id}`, {channels: channels.join(' ')});
            return Embed.send(message.channel, message, Embed.CONFIG, LANG.translate("CHANNELS_SUCCESS_ADDED", mentionedChannel.id))
        case "d":
        case "del":
            delete channels[channels.indexOf(mentionedChannel.id)]
            channels.sort()
            Connection.query(`UPDATE guilds SET ? WHERE guild_id = ${message.guild.id}`, {channels: channels.join(' ')});
            return Embed.send(message.channel, message, Embed.CONFIG, LANG.translate("CHANNELS_SUCCESS_REMOVED", mentionedChannel.id))
        case "l":
        case "list":
            exports.list = ""
            channels.forEach(channel => {
                exports.list += "<#"+channel+">, "
                exports.list = exports.list.replace("<#>", "")
            })
            return message.channel.send(LANG.translate("CHANNELS_LIST", PREFIX) + exports.list)
    }
}