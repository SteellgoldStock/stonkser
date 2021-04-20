const Discord = require('discord.js')
const Registry = require('./managers/Registry')

exports.MySQL = require("mysql");
exports.Connection = exports.MySQL.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'stonkser'
});

exports.Connection.connect(function(err) {
    if (err) { return console.error('Error in the connection: ' + err.stack); }
    console.log(exports.Colors.rainbow('Connecté à la base de données avec l\'identifiant: ' + exports.Connection.threadId));
});

exports.Version = "v1.0"

exports.Client = new Discord.Client()
exports.Client.commands = new Discord.Collection();
exports.Config = require('./resources/Config.json')
exports.Commands = require('./resources/Commands.json')
exports.Embed = require('./managers/Embed')
exports.Colors = require('colors')
exports.Game = require('./managers/Game')
exports.PrisonCommands = {};


require('./listener/members/Messages')
require('./listener/members/Member')
require('./listener/bot/Guild')
require('./listener/bot/Ready')

console.log(exports.Colors.rainbow("Stonks prêt à générer de l'argent !"))
exports.Client.login(exports.Config.token)
