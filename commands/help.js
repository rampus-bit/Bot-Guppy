module.exports = {
  name: 'help',
  description: 'creates an embed with categories that pertain to certain commands.',
  execute(client, message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('**Commands**')
    .setDescription('Listed below are all possible commands:')
    .addFields(

      { name: '**General Commands:**',
        value:
      `**-help** - Displays the help menu
       **-hello** - Greets any users
       **-update** - Gives an update of the current bot features
       **-jojo** - Displays a jojo
      `},

      { name: '**Music Related Commands:**',
        value:
      `**-play (Song of choice)** - Plays a the song of choice
       **-play (URL)** - Plays the users URL
       **-leave** - Removes bot from the room, and stops playing music
      `},
    )
    .setFooter('Make sure to bust');

        message.channel.send(newEmbed);
    }
}
