const { Client, Colors, Config, MySQL, Connection, Game, Time,Embed} = require("../../Stonkser");
const Registry = require('../../managers/Registry')

Client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    Connection.query(`SELECT *
                      FROM guilds
                      WHERE guild_id = ${message.guild.id}`, function (error, guildDB, fields) {
        if (error) throw error;

        const Prefix = guildDB[0].bot_prefix;
        if (message.content.indexOf(Prefix) !== 0) return;

        const args = message.content.slice(Prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = Client.commands.get(command);

        if (cmd) {
            const LANG = require('../../resources/langs/' + guildDB[0].bot_lang)
            const JOBS = require('../../resources/langs/jobs/Job_' + guildDB[0].bot_lang + '.json')
            const TOWNS = require('../../resources/Towns.json')

            Connection.query(`SELECT * FROM users WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, results) {
                if (error) throw error

                if (Registry.GameCommand.includes(command)) {
                    if (guildDB[0].channels.includes(message.channel.id)) {
                        // Sommeil
                        if (results[0].sleeping_time !== null) {
                            if (!Registry.SleepCommands.includes(command)) return cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix, guildDB[0])
                            Time.getTime(false, null, true).then(value => {
                                if (value >= results[0].sleeping_time) {
                                    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {sleeping_time: null});
                                    return Embed.send(message.channel, message, Embed.SLEEP, LANG.translate("SLEEP_STOP"))
                                } else {
                                    message.channel.send(":sleeping_accommodation: :zzz:").then(msg => {
                                        msg.delete({timeout: 2000})
                                        message.delete()
                                    })
                                }
                            })
                        // PRISON
                        } else if (results[0].prison_time !== null) {
                            if (!Registry.PrisonCommands.includes(command)) return cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix, guildDB[0])
                            Time.getTime(false, null, true).then(value => {
                                if (value >= results[0].prison_time) {
                                    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {prison_time: null});
                                    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("PRISON_EXIT"))
                                } else {
                                    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("PRISON_ERROR_IN"), {
                                        0: {
                                            "title": LANG.translate("PRISON_ERROR_IN_0"),
                                            "content": LANG.translate("PRISON_ERROR_IN_1") +
                                                LANG.translate("PRISON_ERROR_IN_2") +
                                                LANG.translate("PRISON_ERROR_IN_3"),
                                            "inline": false
                                        },
                                        1: {
                                            "title": LANG.translate("PRISON_ERROR_IN_4"),
                                            "content": LANG.translate("PRISON_ERROR_IN_5"),
                                            "inline": false
                                        },
                                        2: {
                                            "title": LANG.translate("PRISON_ERROR_IN_6"),
                                            "content": LANG.translate("PRISON_ERROR_IN_7", Prefix),
                                            "inline": false
                                        }
                                    })
                                }
                            })
                        } else if (results[0].traject_end !== null) {
                            if (!Registry.PlaneCommand.includes(command)) return cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix, guildDB[0])
                            Time.getTime(false, null, true).then(value => {
                                if (value >= results[0].traject_end) {
                                    Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {traject_end: null});
                                    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("PLANE_FLY_END"))
                                } else {
                                    return Embed.send(message.channel, message, Embed.PRISON, LANG.translate("PLANE_FLY_INFO"))
                                }
                            })
                        } else{
                            cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix, guildDB[0])
                        }
                    } else {
                        return message.reply(LANG.translate("CHANNELS_COMMAND", Prefix))
                    }
                } else {
                    cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix, guildDB[0])
                }
            });
        }
    });
});