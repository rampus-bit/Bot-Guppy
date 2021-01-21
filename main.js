//Package imports
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('NoteGuppy is Online!');
    memberCounter(client);
});

//Search for message corresponding with command files
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //List of commands
    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    }
    else if (command == 'website'){
        client.commands.get('website').execute(message, args);
    }
    else if (command == 'jojo'){
        client.commands.get('jojo').execute(message, args);
    }
    else if (command == 'space'){
        client.commands.get('space').execute(message, args);
    }
    else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    else if (command == 'play'){
        client.commands.get('play').execute(message, args);
    }
    else if (command == 'leave'){
        client.commands.get('leave').execute(message, args);
    }
    else if (command == 'quote'){
        client.commands.get('quote').execute(message, args);
    }
})