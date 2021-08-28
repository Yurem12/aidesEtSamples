module.exports = {
    name: "kick",
    aliases: ["k"],
    description: "kick un membre",
    category: "category",
    guildOnly: true,
    memberpermissions:"KICK_MEMBER",
    adminPermOverride: true,
    cooldown: 2,
    usage: "<usage>",
    execute(message, args) {
        let member = message.mentions.members.first();
        guild.member.kick(member).then((member) => {
            var msgcontent = `L'utilisateur ${member.username} a bien été kick par ${message.author.username}.`;
            var logs = `${message.author.username} a kick ${member.username}.`
            const chanlog = message.guild.channels.cache.get('801835792674062357');
        var réponse = new Discord.MessageEmbed()
        .setTitle('Yurem\'s Discord Bot')
        .setDescription(`**Réponse a la requête de <@${message.author.id}>**
    
                        ${msgcontent}`)
        .setColor("RANDOM")
        .setFooter("Pour tout problème contactez le haut staff.")
        .setTimestamp()

    var msglog = new Discord.MessageEmbed()
        .setTitle('Yurem\'s Discord Bot')
        .setDescription(`**logs de la requête de <@${message.author.id}>**

                    ${logs}`)
        .setColor("RANDOM")
        .setFooter("Pour tout problème avec la requête agissez vite et en conséquence a votre grade.")
        .setTimestamp()

        if (!msgcontent) {
            chanlog.send(msglog);
        } else {
            message.channel.send(réponse);
            chanlog.send(msglog);
        }
        })
    }
    }
