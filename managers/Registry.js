const { } = require('../Stonkser')
exports.PrisonCommands = []
exports.SleepCommands = []
exports.GameCommand = []

exports.registerCommand = async(commands, name = "default", isExperimental = false, onlyTestServer = true, directory = "commands/", file = "default", Colors, isAffectedByPrison = false, isAffectedBySleep = false, isGameCommand = true) => {
    let props = require('../' + directory + file + ".js")
    commands.set(name, props)

    if(isAffectedByPrison) exports.PrisonCommands.push(name)
    if(isAffectedBySleep) exports.SleepCommands.push(name)
    if(isGameCommand) exports.GameCommand.push(name)

    console.log(Colors.yellow(`Commande enregistré:`) + Colors.green(`\n- Nom: ${name}\n- Répertoire: ${directory}${file}.js`))
}