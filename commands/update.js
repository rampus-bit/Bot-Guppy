module.exports = {
    name: 'update',
    description: 'notifies the user what new changes have been made to the bot',
    execute(client, message, args, Discord){
        //message.channel.send('Hello, in update 1.2 we: managed, and improved overall performance of the file structure within the bot. We also removed the lewd commands. Thanks for reading this versions update!');
        message.channel.send('Hello, in update 1.3 we: Added basic role functionality. So, in the getroles chat, you can type "-reactionrole" and you can pick an emoji, which will then give you the alloted role. Thanks for reading this versions update!');
    }
}