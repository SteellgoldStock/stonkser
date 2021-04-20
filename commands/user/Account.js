const Discord = require("discord.js");
const { Client, Colors, Version, Embed} = require("../../Stonkser");

module.exports.run = async (Client, message, args, User, Jobs, Towns, LANG) => {
    if(!message.guild) return;

    const needPay = true;

    if(needPay){
        exports.needPayRent = LANG.translate("ACCOUNT_RENT_PAY")
    }

    return Embed.send(message.channel, message, Embed.ACCOUNT,exports.needPayRent, {
        0: {
            "title": LANG.translate("ACCOUNT_ARRAY_TITLE"),
            "content":
                LANG.translate("ACCOUNT_USER_MONEY", User.money) + "\n"+
                LANG.translate("ACCOUNT_USER_MONEY_BANK", User.money_bank) + "\n"+
                LANG.translate("ACCOUNT_USER_JOB", User.job !== null ? Jobs[User.job]['name'] : LANG.translate("ACCOUNT_ERROR_NO_JOB")) + "\n"+
                LANG.translate("ACCOUNT_USER_TOWN", Towns['towns'][User.town]['name'], Towns['towns'][User.town]['rent']),
            "inline":false
        }
    })
}