module.exports = {
    name: 'ticket',
    aliases: [],
    permissions: [],
    description: 'Open a ticket',
    async execute(message, args, cmd, discord){
        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
        channel.setParent('821094442311745586');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false
        })
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true
        })
        const reactionMessage = await channel.send('Thank you for contacting support')

        try{

            await reactionMessage.react("lock");
            await reactionMessage.react("not permitted");
        } catch(err){
            ("lock");
            ("not permitted");
        }
    },
};