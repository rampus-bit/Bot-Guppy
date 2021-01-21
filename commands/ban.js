//Define name and description of command
module.exports = {
    name: 'ban',
    description: 'this command kicks a member',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned")

        } else{
            message.channel.send('Not a valid member, please run again with a valid user ID.');
        }
    }
}