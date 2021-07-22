module.exports = {
    name: "restart",
    aliases: ["res"],
    description: "restart le bot sur besoin.",
    category: "category",
    guildOnly: true,
    memberpermissions:"MANAGE_WEBHOOKS",
    adminPermOverride: true,
    cooldown: 10,
    async execute(message) {
        if(message.author.id === !message.guild.ownerID)return message.reply('Tu ne peux pas executer cette commande.');
        await message.channel.send('Le bot redémarre.')
        process.exit();
    },
};