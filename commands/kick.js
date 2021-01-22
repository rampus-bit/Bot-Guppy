module.exports = {
    name: 'kick',
    description: 'this command kicks a member',
    execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        } else{
            message.channel.send('Not a valid member, please run again with a valid user ID.');
        }
    }
}