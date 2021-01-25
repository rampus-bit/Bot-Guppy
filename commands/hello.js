module.exports = {
    name: 'hello',
    description: 'greets users new to the command system',
    execute(client, message, args, Discord){
        message.channel.send('Hello, I am guppy, and Im a discord bot written by "Grandmaster Chode", or Rampus. I handle any auto-management for the server. Here you can do pretty much whatever, enjoy!');
        message.channel.send('Link to the server website: https://aldengarcia.github.io/');
    }
}