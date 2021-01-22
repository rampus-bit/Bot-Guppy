module.exports = {
    name: 'update',
    description: 'notifies the user what new changes have been made to the bot',
    execute(client, message, args, Discord){
        message.channel.send('Hello, in update 1.2 we: managed, and improved overall performance of the file structure within the bot. We also removed the lewd commands. Thanks for reading this versions update!');
    }
}