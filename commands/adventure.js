const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.adventure) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**Commande : ${command.name}**\n\n${command.adventure.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.adventure.syntax ? ` ${command.adventure.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('Liste des commandes')
                .setDescription(`${client.commands.filter(command => command.adventure).map(command => `\`${config.prefix}${command.name}\``).join(' ')}\n\nPour plus d'informations sur une commande, tapez \`${config.prefix}adventure [nom de la commande]\``))
        }
    },
    name: 'adventure',
    
}