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
        if (args[0] === 'help') return message.channel.send({
            embed: {
                Title: {
                    text: 'Réponse a la commande help'
                }
            }
        });
        if (!message.channel.nsfw)return message.channel.send('Veuillez exécuter cette commande dans un channel nsfw.');

        get("https://neko-love.xyz/api/v1/" + args[1], (res) => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                return message.channel.send("Votre demande n'existe pas veuillez effectué la commande ?neko help pour obtenir la liste des possiblilitées.."); 
            }
    
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
                                text: `<@${message.author.id}>`
                            }
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