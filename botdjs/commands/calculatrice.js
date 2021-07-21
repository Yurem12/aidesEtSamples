const TMath = require("tmath");

module.exports = {
    name: "calculatrice",
    aliases: ["cl"],
    description: "ben une calculatrice fils de pute",
    category: "commands",
    guildOnly: true,
    memberpermissions:"VIEW_CHANNEL",
    adminPermOverride: true,
    cooldown: 2,
    usage: "<usage>",
    async execute(message, args) {

                const calculator = new TMath({
                    destroy: "tu m'as cassé fils de pute",
                    invalid: "la prochaine fois met un calcul correct",
                    message: message,
                  });
                  var logs = `l'utilisateur ${message.author} a exécuté la commande d'accès a la calculatrice.`;
                await calculator.start();
              const chanlog = message.guild.channels.cache.get('854120834074279937');
            var msglog = new Discord.MessageEmbed()
                .setTitle('Yurem\'s Discord Bot')
                .setDescription(`**logs de la requête de <@${message.author.id}>**
        
                            ${logs}`)
                .setColor("RANDOM")
                .setFooter("Pour tout problème avec la requête agissez vite et en conséquence a votre grade.")
                .setTimestamp()

                    chanlog.send(msglog);
            }
        };