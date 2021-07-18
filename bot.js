const Discord = require('discord.js');
const Client =  new Discord.Client;
const prefix ="-";
const prefix2 = "$";

Client.login('NjI5ODI0MTUzNzk2NjA4MDQw.XZfXcw.RyjkTG6k0iuB0-N0el3Fd7cxlQY')

Client.on('ready', () => {
    console.log('LouKo0206');
});

const args = message.content.slice(prefix.length).trim();

Client.on('message', message => {
    var args = message.content.slice(prefix.length).trim('');
    var msgchannel = message.guild.channels.cache.get('841382474559127620');
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

const member = `@${message.author.id}`;


    if(message.channel.id === "841382474559127620"){
        message.delete()
        if (message.content.startsWith(`${prefix}SugSky`)){
            const Suggestion = new Discord.MessageEmbed()
                .setTitle("Suggestion De")
                .setDescription(member)
                .setColor("#6b0101")
                .addField(`Suggestion : ${args}`)
                msgchannel.send(Suggestion)
    }}
});