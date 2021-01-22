//Package imports
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})