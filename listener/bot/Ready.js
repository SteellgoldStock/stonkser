const Discord = require('discord.js')
const { Client, Colors, Config, Connection, Version } = require("../../Stonkser");
const Channels = require('../../managers/Channels')
const Registry = require('../../managers/Registry')

Client.on("ready", () => {
    Client.user.setPresence({
        status: 'online',
        activity: {
            name: "Make money.",
            type: "PLAYING"
        }
    });

    // JEU
    Registry.registerCommand(Client.commands, "rob", false, false, "commands/rp/", "Rob", Colors, true, true);
    Registry.registerCommand(Client.commands, "job", false, false, "commands/job/", "Job", Colors, true, true);
    Registry.registerCommand(Client.commands, "account", false, false, "commands/user/", "Account", Colors, false, true);
    Registry.registerCommand(Client.commands, "bank", false, false, "commands/user/", "Bank", Colors, true, true);
    Registry.registerCommand(Client.commands, "plane", false, false, "commands/rp/", "Plane", Colors, true, true);
    Registry.registerCommand(Client.commands, "pay", false, false, "commands/user/", "Pay", Colors, true, true);
    Registry.registerCommand(Client.commands, "work", false, false, "commands/job/", "Work", Colors, true, true);
    Registry.registerCommand(Client.commands, "sleep", false, false, "commands/user/", "Sleep", Colors, true, true);
    Registry.registerCommand(Client.commands, "rent", false, false, "commands/rp/", "Rent", Colors, true, true);
    Registry.registerCommand(Client.commands, "cards", false, false, "commands/rp/", "Cards", Colors,false, true);
    Registry.registerCommand(Client.commands, "mafia", false, false, "commands/rp/", "Mafia", Colors,false, true);
    Registry.registerCommand(Client.commands, "escape", false, false, "commands/rp/", "Escape", Colors,false, true);
    //Registry.registerCommand(Client.commands, "town", "", [], false, false, "commands/user/", "Town")

    // BOT
    Registry.registerCommand(Client.commands, "about", false, false, "commands/", "About", Colors)
    Registry.registerCommand(Client.commands, "help", false, false, "commands/", "Help", Colors)

    // CONFIGURATIONS
    Registry.registerCommand(Client.commands, "prefix", false, false,"commands/config/", "Prefix", Colors)
    Registry.registerCommand(Client.commands, "lang", false, false,"commands/config/", "Lang", Colors)
});