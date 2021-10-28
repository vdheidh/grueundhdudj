const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'test',
    description: "Test Command!",
    execute(message, args){
        if(message.member.roles.cache.has('901770565411561492')){
            const aEmbed = new MessageEmbed()
	            .setColor('#00FF00')
	            .setDescription('**:white_check_mark:  ‎‎The Bot is working!**')
            message.reply({ embeds: [aEmbed] });
        } else {
            const bEmbed = new MessageEmbed()
	            .setColor('#ff0000')
	            .setDescription('**:no_entry:  You dont have the right permissions!**')
            message.reply({ embeds: [bEmbed] });
        }
    }
}