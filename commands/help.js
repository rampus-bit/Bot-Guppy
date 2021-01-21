module.exports = {
    name: 'help',
    description: 'displays command list',
    execute(message, args){
        message.channel.send(`
        **        This is a list of my supported commands:**
        **-help** - Displays the help menu
        **-hello** - Greets any users
        **-website** - displays the help menu
        **-space** - Displays an ascii space art
        **-jojo** - Displays a Jojo

        **Music related commands:**
        **-play (Song of choice)** - Plays a the song of choice
        **-play (URL)** - Plays the users URL
        **-leave** - Removes bot from the room, and stops playing music

        **Special commands for special children:**
        **-dick** - Displays an ascii penis
        **-cum** - Displays something special
        `);
    }
}