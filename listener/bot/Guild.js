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
        }
    });
});