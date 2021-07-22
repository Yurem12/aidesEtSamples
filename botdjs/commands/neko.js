const { get } = require('https');

module.exports = {
    name: "neko",
    aliases: ["n"],
    description: "Gif pour les pervers.",
    category: "category",
    guildOnly: true,
    memberpermissions:"SEND_MESSAGES",
    adminPermOverride: true,
    cooldown: 5,
    usage: "<usage>",
    execute(message, args) {
        var requete = args[0];
        if (args[0] === 'lewd') {
            var requete = 'nekolewd';
        }
        if (requete === 'help') return message.channel.send({
            embed: {
                title:
                    'Réponse a la commande help',
                description: 
                    `Les différentes commandes safes sont : 
                    -neko
                    -kitsune
                    -hug
                    -pat
                    -waifu
                    -cry
                    -kiss
                    -slap 
                    et pour les NSFW:
                    -lewd
                    `,
                color: 
                    'RANDOM'
                },

            });
        if (!message.channel.nsfw)return message.channel.send('Veuillez exécuter cette commande dans un channel nsfw.');
        get("https://neko-love.xyz/api/v1/" + requete, (res) => {
            const { statusCode } = res;
            if (statusCode !== 200)
                return message.channel.send({
                    embed: {
                        title:'échec de la commande',
                    
                    description:`Votre demande n'existe pas veuillez effectué la commande ${config.prefix}neko help pour obtenir la liste des possiblilitées..`
                }});
    
            res.setEncoding("utf8");
            let rawData = "";
    
            res.on("data", chunk => {
                rawData += chunk;
            });
    
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
    
                    message.channel.send({
                        embed: {
                            image: {
                                url: parsedData.url
                            },
                            footer: {
                                text: `${message.author.username}`
                            },
                            color: 'RANDOM'
                        }
                    });
                } catch (error) {
                    message.channel.send(error.message)
                }
            });
        }).on('error', (error) => {
            message.channel.send(error.message);
        })
    },
};