const { Client, Colors, Config, Connection, Game } = require("../../Stonkser");

Client.on("guildMemberAdd", member => {
    if (!member.guild) return;
    if (member.user.bot) return;

    Game.createUser(member.user.id, member.guild.id)
});