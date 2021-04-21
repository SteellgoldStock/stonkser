const Discord = require('discord.js')
const { Connection } = require('../Stonkser')

exports.createUser = async(userId, guildId) => {
    Connection.query(`SELECT * FROM users WHERE user_id = ${userId} AND guild_id = ${guildId}`, null, function (error, results) {
        if(error) throw error
        if(!results.length > 0){
            Connection.query(`INSERT INTO users SET ?`, {
                user_id: userId,
                guild_id: guildId,
                money: 100,
                money_bank: 50,
                town: "nussdorfer",
                job: null,
                jobJoinDate: null,
                fatigue: 0,
                rent: "none",
                next_rent_pay: null,
                traject_end: null,
                sleeping_time: null,
                prison_time: null
            }, function (error, results){
                console.log(results)
            })
        }
    });
}