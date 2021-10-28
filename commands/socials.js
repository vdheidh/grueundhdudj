const { Discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'socials',
    description: "Shows Socials!",
    execute(message, args){
        if(message.member.roles.cache.has('901770565411561492')){
            const aEmbed = new MessageEmbed()
	            .setColor('#5d402a')
                .setTitle('SCMC Socials!  :pushpin:')
	            .setDescription('**Here you will find all our Socials!** \n ➥ https://solo.to/scmc')
            message.reply({ embeds: [aEmbed] });
        } else {
            const bEmbed = new MessageEmbed()
	            .setColor('#ff0000')
	            .setDescription('**:no_entry:  You dont have the right permissions!**')
            message.reply({ embeds: [bEmbed] });
        }
    }
}