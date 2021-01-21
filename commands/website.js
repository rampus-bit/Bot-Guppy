module.exports = {
    name: 'website',
    description: 'this will provide a link to my website',
    execute(message, args){
        message.channel.send('https://aldengarcia.github.io/');
    }
}