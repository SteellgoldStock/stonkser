const { } = require('../Stonkser')
exports.PrisonCommands = []

exports.registerCommand = async(commands, name = "default", isExperimental = false, onlyTestServer = true, directory = "commands/", file = "default", Colors, isAffectedByPrison = false) => {
    let props = require('../' + directory + file + ".js")
    commands.set(name, props)

    if(isAffectedByPrison) exports.PrisonCommands.push(name)
    console.log(exports.PrisonCommands)

    console.log(Colors.yellow(`Commande enregistré:`) + Colors.green(`\n- Nom: ${name}\n- Répertoire: ${directory}${file}.js`))
}