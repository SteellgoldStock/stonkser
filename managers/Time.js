const Discord = require('discord.js')

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

exports.getTime = async(Delay = false, delay = 0) => {
    if (Delay) {
        return Math.round((new Date().getTime() / 1000) + delay) // TEMP FUTURE
    } else {
        return Math.round(new Date().getTime() / 1000) // TEMP PRESENT
    }
}

exports.imp = async(Now, Next) => {
    if(Now >= Next){
        return true
    }else{
        return false
    }
}