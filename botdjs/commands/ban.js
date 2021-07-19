const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "permet a un membre du staff de banir un utilisateur enfreignant les règles du serveur.",
    category: "commands",
    guildOnly: true,
    adminPermOverride: true,
    cooldown: 2,
    usage: "<usage>",
    execute(message, args) {
        const chanlog = message.guild.channels.cache.get('854120834074279937');
        if (!message.member.hasPermission(['BAN_MEMBERS'])) {
            var logs = `l'utilisateur ${message.author} a essayer d'utiliser la commande de ban alors qu'il n'y avais pas le droit.`
        }
        if (message.member.hasPermission(['BAN_MEMBERS'])) {
            let member = message.mentions.members.first();
            var msgcontent = `l'utilisateur a bien été banni.`
            var logs = `l'utilisateur ${message.author} a utiliser la commande de ban avec succès et a banni ${member} de cette manière.`
            member.ban().then((member) => {
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
};