const Discord = require('discord.js');

module.exports = {
    name: 'reactionrole',
    description: 'initiates a reaction role embed',
    async execute(client, message, args, Discord) {

        //Const var to be called later
        const channel = '802350802555371551';
        const goblinRole = message.guild.roles.cache.find(role => role.name === '🦦 Goblin');
        const flightLessBirdRole = message.guild.roles.cache.find(role => role.name === '🐧 Flightless Bird');
        const flatEartherRole = message.guild.roles.cache.find(role => role.name === '🌎 Flat Earther');
        const programmerRole = message.guild.roles.cache.find(role => role.name === '💻 Programmer');
        const peanutRole = message.guild.roles.cache.find(role => role.name === '🥜 Peanut');
        const apeRole = message.guild.roles.cache.find(role => role.name === '🦍 Fucking Ape');
        const gelatinousRole = message.guild.roles.cache.find(role => role.name === '🍡 Gelatinous Boy');
        const babieRole = message.guild.roles.cache.find(role => role.name === '🍭 Lil Babie');
        const ascendedRole = message.guild.roles.cache.find(role => role.name === '🦇 90 Degree Back');
        const jabootyholeRole = message.guild.roles.cache.find(role => role.name === '🍑 Jabootyhole');
        const gigipoolaRole = message.guild.roles.cache.find(role => role.name === '💩 GIGI POOLA');
        const throwbackThursdayRole = message.guild.roles.cache.find(role => role.name === '🚿 Throwback Thursday');
        const bonkRole = message.guild.roles.cache.find(role => role.name === '🔨 BONK');

        const goblinEmoji = '🦦';
        const flightLessBirdEmoji = '🐧';
        const flatEartherEmoji = '🌎';
        const programmerEmoji = '💻';
        const peanutEmoji = '🥜';
        const apeEmoji = '🦍';
        const gelatinousEmoji = '🍡';
        const babieEmoji = '🍭'
        const ascendedEmoji = '🦇';
        const jabootyholeEmoji = '🍑';
        const gigipoolaEmoji = '💩';
        const throwbackThursdayEmoji = '🚿';
        const bonkEmoji = '🔨';

        //Generate text within embed
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your roles, my humans.')
            .setDescription('Choosing a role allows people to affiliate with certain attributes.\n\n'
                + `${goblinEmoji} - prepare to have your money stolen\n`
                + `${flightLessBirdEmoji} - penguins are fast\n`
                + `${flatEartherEmoji} - flat earthers will fall of the edge\n`
                + `${programmerEmoji} - for programmers\n`
                + `${peanutEmoji} - for peanuts\n`
                + `${apeEmoji} - 'you absolute ape'\n`
                + `${gelatinousEmoji} - for squishy children\n`
                + `${babieEmoji} - babies are ugly trolls\n`
                + `${ascendedEmoji} - for people with 90 degree backs\n`
                + `${jabootyholeEmoji} - for people with big butts\n`
                + `${gigipoolaEmoji} - GIGIPOOLA\n`
                + `${throwbackThursdayEmoji} - Shower with your dad\n`
                + `${bonkEmoji} - hammers cure pain`);

        //Generate widgets under embed to be clicked on
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(goblinEmoji);
        messageEmbed.react(flightLessBirdEmoji);
        messageEmbed.react(flatEartherEmoji);
        messageEmbed.react(programmerEmoji);
        messageEmbed.react(peanutEmoji);
        messageEmbed.react(apeEmoji);
        messageEmbed.react(gelatinousEmoji);
        messageEmbed.react(babieEmoji);
        messageEmbed.react(ascendedEmoji);
        messageEmbed.react(jabootyholeEmoji);
        messageEmbed.react(gigipoolaEmoji);
        messageEmbed.react(throwbackThursdayEmoji);
        messageEmbed.react(bonkEmoji);

        //Add roles that a user clicks on
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === goblinEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(goblinRole);
                }
                if (reaction.emoji.name === flightLessBirdEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(flightLessBirdRole);
                }
                if (reaction.emoji.name === programmerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(programmerRole);
                }
                if (reaction.emoji.name === flatEartherEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(flatEartherRole);
                }
                if (reaction.emoji.name === peanutEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(peanutRole);
                }
                if (reaction.emoji.name === apeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apeRole);
                }
                if (reaction.emoji.name === gelatinousEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gelatinousRole);
                }
                if (reaction.emoji.name === babieEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(babieRole);
                }
                if (reaction.emoji.name === ascendedEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ascendedRole);
                }
                if (reaction.emoji.name === jabootyholeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(jabootyholeRole);
                }
                if (reaction.emoji.name === gigipoolaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gigipoolaRole);
                }
                if (reaction.emoji.name === throwbackThursdayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(throwbackThursdayRole)
                }
                if (reaction.emoji.name === bonkEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bonkRole)
                }
            } else {
                return;
            }
        });

        //Remove roles from user if they unselect
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === goblinEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(goblinRole);
                }
                if (reaction.emoji.name === flightLessBirdEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(flightLessBirdRole);
                }
                if (reaction.emoji.name === programmerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(programmerRole);
                }
                if (reaction.emoji.name === flatEartherEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(flatEartherRole);
                }
                if (reaction.emoji.name === peanutEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(peanutRole);
                }
                if (reaction.emoji.name === apeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apeRole);
                }
                if (reaction.emoji.name === gelatinousEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gelatinousRole);
                }
                if (reaction.emoji.name === babieEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(babieRole);
                }
                if (reaction.emoji.name === ascendedEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ascendedRole);
                }
                if (reaction.emoji.name === jabootyholeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(jabootyholeRole);
                }
                if (reaction.emoji.name === gigipoolaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gigipoolaRole);
                }
                if (reaction.emoji.name === throwbackThursdayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(throwbackThursdayRole)
                }
                if (reaction.emoji.name === bonkEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bonkRole)
                }
            } else {
                return;
            }
        });
    }
}
