module.exports = {
    name: '@5Mke~@,6V,E!A,o;DP$hbFjow{9s*{o)e',
    description: 'displays command list',
    execute(client, message, args, Discord){
        message.channel.send(`
        **        This is a list of my supported commands:**
        **-help** - Displays the help menu
        **-hello** - Greets any users
        **-update** - Displays an update of the current bot features
        **-jojo** - Displays a Jojo

        **Music related commands:**
        **-play (Song of choice)** - Plays a the song of choice
        **-play (URL)** - Plays the users URL
        **-leave** - Removes bot from the room, and stops playing music
        `);
    }
}
