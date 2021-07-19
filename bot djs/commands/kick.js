module.exports = {
    name: "kick",
    description: "permet de kick a un membre ayant la permission",
    guildOnly: true,

    adminPermOverride: true,
    cooldown: 2,

    usage: "<usage>",
    execute(message, args) {
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