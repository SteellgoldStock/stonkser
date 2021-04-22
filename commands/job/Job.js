const Discord = require("discord.js");
const { Client, Colors, Version, Embed, Connection, Game, Time} = require("../../Stonkser");

module.exports.run = async (Client, message, args, USER, JOBS, TOWN, LANG) => {
    if (!message.guild) return;

    const JOB_LIST = [
        "chimist", "clown", "plumber", "iceSeller", "banker"
    ]

    switch (args[0]) {
        default:
            if(USER.job !== null) return Embed.send(message.channel,message,Embed.JOB,LANG.translate("JOB_HAS_ONE", JOBS[USER.job]['name'], await Time.timeConverter(USER.jobJoinDate)))
            return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_ERROR"), null, false, Embed.ERROR_COLOR)
        case "i":
        case "infos":
            if (!args[1]) return Embed.send(message.channel, message, Embed.INFOS, LANG.translate("JOB_NOT_PRECISED"))
            if (!JOB_LIST.includes(args[1])) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_DONT_EXIST"), null, false, Embed.ERROR_COLOR)

            if (JOBS[args[1]]['haveTips']) {
                exports.line = LANG.translate("JOB_RANDOM_TIP", JOBS[args[1]]["tip"]["min"], JOBS[args[1]]["tip"]["max"])
            }else{
                exports.line = ""
            }

            return Embed.send(message.channel, message, Embed.JOB, JOBS[args[1]]["description"], {
                0: {
                    "title": LANG.translate("JOB_INFORMATIONS_EMBED_TITLE", JOBS[args[1]]['name']),
                    "content": LANG.translate("JOB_INFORMATIONS_EMBED_CONTENT", JOBS[args[1]]["salary"], JOBS[args[1]]['action']) + "\n"
                        + exports.line
                        + LANG.translate("JOB_INFORMATIONS_EMBED_BENEFITS", JOBS[args[1]]["benefits"])
                        + LANG.translate("JOB_INFORMATIONS_EMBED_DISADVANTAGES", JOBS[args[1]]["disadvantages"]),
                    "inline": false
                },
            })
        case "l":
        case "list":
            return Embed.send(message.channel, message, Embed.JOB, null, {
                0: {
                    "title": LANG.translate("JOB_JOBS_LIST"),
                    "content":
                        LANG.translate("JOB_CHIMIST", JOBS["chimist"]["salary"])+
                        LANG.translate("JOB_CLOWN", JOBS["clown"]["salary"])+
                        LANG.translate("JOB_PLUMBER", JOBS["plumber"]["salary"])+
                        LANG.translate("JOB_ICESELLER", JOBS["iceSeller"]["salary"])+
                        LANG.translate("JOB_BANKER")
                        // LANG.translate("JOB_KILLER")
                }
            });
        case "j":
        case "join":
            if(!args[1]) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_NOT_PRECISED_FOR_JOIN"),null,false, Embed.ERROR_COLOR)
            if (!JOB_LIST.includes(args[1])) return Embed.send(message.channel, message, Embed.ERROR, "Le métier que vous venez de préciser n'existe pas, mais vous pouvez en faire une suggestion avec la commande `-suggest [text]`", null, false, Embed.ERROR_COLOR)
            if(USER.job !== null) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_NEED_TO_LEAVE_TO_CHANGE"), null, false, Embed.ERROR_COLOR);
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {job: args[1], jobJoinDate: await Time.getTime(false,null,true)});
            return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_JOINED_SUCCESS", JOBS[args[1]]['name']), null, false, Embed.ERROR_COLOR);
        case "q":
        case "leave":
        case "quit":
            if(USER.job == null) return Embed.send(message.channel, message, Embed.ERROR, LANG.translate("JOB_CANT_LEAVE_BECAUSE_DONT_HAVE_JOB"), null, false, Embed.ERROR_COLOR);
            const oldJob = USER.job
            Connection.query(`UPDATE users SET ? WHERE user_id = ${message.author.id} AND guild_id = ${message.guild.id}`, {job: null, jobJoinDate: null});
            return Embed.send(message.channel, message, Embed.JOB,LANG.translate("JOB_LEAVED_SUCCESS", JOBS[oldJob]['name']), null, false);
    }
}