Discord = require('discord.js')

module.exports = {
    name: "clear",
    description: "permet de supprimer des messages de manière rapide et groupée",
    category: "category",
    guildOnly: true,
    adminPermOverride: true,
    cooldown: 2,
    usage: "<usage>",
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
             var msgcontent = "Vous n'avez pas la permission d'utiliser cette commande";
             var logs = `l'utilisateur ${message.author} a essayer d'utiliser la commande de clear alors qu'il n'y avais pas le droit.`
        }
        let count = args[0];
        if (!count) {
             var msgcontent = "Veuillez indiquer un nombre de messages à supprimer.";
             var logs = `l'utilisateur ${message.author} a essayer d'utiliser la commande de clear sans indiquer le nombre de message a effacer.`
        }
        if (isNaN(count)) {
             var msgcontent = "Veuillez indiquer un nombre valide.";
             var logs = `l'utilisateur ${message.author} a essayer d'utiliser la commande de clear en mettant autre chose qu'un nombre en temps que valeur.`
        }
        if (count < 1 || count > 200) {
             var msgcontent = "Veuillez indiquer un nombre entre 1 et 200.";
             var logs = `l'utilisateur ${message.author} a essayer d'utiliser la commande de clear mais a indiquer une valeur trop faible ou trop élevée ${count}.`
        }
        message.channel.bulkDelete(parseInt(count) + 1)
         var msgcontent = 'messages supprimés pour vous maître.'
         var logs = `l'utilisateur ${message.author} a utiliser la commande de clear avec succès il a effacer ${count} messages de cette manière.`

         const chanlog = message.guild.channels.cache.get('854120834074279937');
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
    },
};