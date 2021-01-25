module.exports = {
    name: 'ban',
    description: 'this command kicks a member',
    execute(client, message, args, Discord){

        //Locate member and ban them
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned")

        //Send error message if ban command is not valid
        } else{
            message.channel.send('Not a valid member, please run again with a valid user ID.');
        }
    }
}