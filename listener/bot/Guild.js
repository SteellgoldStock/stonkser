const Discord = require('discord.js')
const { Client, Colors, Config, Connection, Version} = require("../../Stonkser");
const Channels = require('../../managers/Channels')

Client.on("guildCreate", guild => {

    Connection.query(`SELECT * FROM guilds WHERE guild_id = ${guild.id}`, function (error, results) {
        if(error) throw error;

        if (!results.length > 0) {
            Connection.query('INSERT INTO guilds SET ?', {
                guild_id: guild.id,
                bot_prefix: "-",
                bot_lang: "EN"
            }, function (error) {
                if (error) throw error;

                const embed = new Discord.MessageEmbed()
                    .setTitle("Merci ❤️")
                    .setDescription("Vous m'avez ajouter sur votre serveur, c'est tellement sympa et il a l'air tellement beau :eyes:")
                    .setColor("#ffe872")
                    .addField("Comment configurer le bot","Vous devez faire `-configure` avec le système que vous voulez configurer !")
                    .addField("Comment gagner de l'argent ?","Pour commencer à gagner de l'argent rejoingez un métier avec la commande `-job` et les instructions vous serrons données par rapport à votre métier")
                    .setTimestamp()
                    .setFooter('Stonkser • ' + Version, Client.user.avatarURL())
                    .setThumbnail(Client.user.avatarURL())
                return Channels.getDefaultChannel(guild).send(embed)
            });

            const list = Client.guilds.cache.get(guild.id);
            list.members.cache.each(member => {
                Connection.query('INSERT INTO users SET ?', {
                    user_id: member.id,
                    guild_id: guild.id,
                    money: 500,
                    money_bank: 500,
                    town: "nussdorfer",
                    job: null,
                    jobJoinDate: null,
                    fatigue: 0,
                    rent: "none",
                    next_rent_pay: null,
                    traject_end: null,
                    sleeping_time: null,
                    prison_time: null,
                    escape_failed: null
                })
            })
        }
    });
});