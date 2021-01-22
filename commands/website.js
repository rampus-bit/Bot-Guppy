module.exports = {
    name: 'website',
    description: 'this will provide a link to my website',
    execute(client, message, args, Discord){
        message.channel.send('https://aldengarcia.github.io/');
    }
}