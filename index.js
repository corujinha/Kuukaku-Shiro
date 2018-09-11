const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzQ3OTU0MDAwMzY2MTQxNDQw.DTKF9w.M8YK7KrBzmqV9c64HA0Z5rAwh-A');

bot.on('message', message => {
let responseObject = {
"estilo rebelde" : "https://media.giphy.com/media/xUNemFpGzUAhSIcbZK/giphy.gif",
"paciencia gafanhoto" : "https://media.giphy.com/media/xUNemEfZi9I1ryF8ha/giphy.gif",
"me chupa" : "https://68.media.tumblr.com/tumblr_maxmqcXIAT1rbso6ao1_250.gif",
"oh!" : "https://68.media.tumblr.com/tumblr_m9p9khWVTV1rvf45ao1_500.gif",
"boa piada" : "https://68.media.tumblr.com/tumblr_m5f7fc2lLZ1ry77joo1_500.gif",
"diva" : "https://68.media.tumblr.com/tumblr_m7c2siTjxZ1ry77joo1_500.gif",
"que bonito" : "https://media.giphy.com/media/xUNemEKb5GQjIF0sMw/giphy.gif",
"oi meu chapa" : "https://media.giphy.com/media/QYwkeGUobKWMU/giphy.gif",
"stare" : "https://media.giphy.com/media/3ohk2vxFVS75USRMfC/giphy.gif",
"shiro comandos" : "```shiro deleta, estilo rebelde, paciencia gafanhoto, me chupa, oh!, boa piada, diva, que bonito, oi meu chapa, stare```"
};

console.log('Olá desu~ Estou funcionando agora! ;)');


if (responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
}

let role = message.guild.roles.find("name", "GODDESS & GOD");
if(message.member.roles.has(role.id) && message.content.startsWith("shiro deleta")){
    msgDel = 100;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete

(messages));
}

});