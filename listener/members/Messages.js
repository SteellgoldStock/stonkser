const { Client, Colors, Config, MySQL, Connection, Game, Time,Embed} = require("../../Stonkser");
const Registry = require('../../managers/Registry')

Client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    Connection.query(`SELECT * FROM guilds WHERE guild_id = ${message.guild.id}`, function (error, guildDB, fields) {
        if (error) throw error;

        const Prefix = guildDB[0].bot_prefix;
        if (message.content.indexOf(Prefix) !== 0) return;

        const args = message.content.slice(Prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = Client.commands.get(command);

        // TODO: refaire l'orga
        if (cmd) {
            const LANG = require('../../resources/langs/' + guildDB[0].bot_lang)
            const JOBS = require('../../resources/langs/jobs/Job_' + guildDB[0].bot_lang + '.json')
            const TOWNS = require('../../resources/Towns.json')

            Connection.query(`SELECT * FROM users WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, results) {
                if (error) throw error
                if(!Registry.SleepCommands.includes(command)) cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix)
                if(results[0].sleeping_time === null){
                    cmd.run(Client, message, args, results[0], JOBS, TOWNS, LANG, Prefix)
                }else{
                    Time.getTime(false,null,true).then(value => {
                        if(value >= results[0].sleeping_time){
                            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, { sleeping_time: null });
                            return Embed.send(message.channel,message,Embed.SLEEP,LANG.translate("SLEEP_STOP"))
                        }else{
                            message.channel.send(":sleeping_accommodation: :zzz:").then(msg => {
                                msg.delete({ timeout: 2000 })
                                message.delete()
                            })
                        }
                    })
                }
            });

            /**
             Connection.query(`SELECT * FROM prison WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, tracjetsResults) {
                if (error) throw error
                if (tracjetsResults.length > 0) {
                    if(tracjetsResults[0].expiration >= Time.getTime(false)){
                        Connection.query(`DELETE FROM prison WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`);
                        return message.reply(LANG.translate("PRISON_EXIT")).then(msg => {
                            msg.delete({timeout: 10000});
                        })
                    }else{
                        return message.reply(LANG.translate("PRISON_ERROR_IN")).then(msg => {
                            msg.delete({timeout: 10000});
                        })
                    }
                } else {
                    Connection.query(`SELECT * FROM users WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, results) {
                        if (error) throw error
                        if (results.length > 0) {
                            Connection.query(`SELECT * FROM users WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, function (error, results) {
                                if (error) throw error;

                            });
                        } else {
                            Game.createUser(message.author.id, message.guild.id)
                        }
                    });
                }
            });
             */
        }
    });
});