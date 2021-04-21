const Discord = require('discord.js')

exports.NOTEPAD = []

exports.timeConverter = async (UNIX_timestamp, delay = 0) => {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
}

exports.getTime = async(Delay = false, delay = {
    hours: 0,
    minutes: 0,
    seconds: 0
}, inMS) => {
    const date = new Date()

    if(Delay){
        date.setHours(date.getHours() + delay["hours"])
        date.setMinutes(date.getMinutes() + delay["minutes"])
        date.setSeconds(date.getSeconds() + delay["seconds"])
    }

    if(inMS) return date.getTime()
    return Math.floor(date.getTime() / 1000)
}

exports.imp = async(Now, Next) => {
    if(Now >= Next){
        return true
    }else{
        return false
    }
}