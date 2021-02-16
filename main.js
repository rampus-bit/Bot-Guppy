//Package imports
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const memberCounter = require('./counters/member-counter');

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🤌🏿Yurme');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('802627340454723646').send(`Welcome to our server <@${guildMember.user.id}>! Make sure to check out our rules channel.`);
});

client.login('Nzk5NzMyMjY5NzUzMTcyMDA4.YAH2tw.PwRM3mOE_VopkdwRMkdT3d0Yc_8');