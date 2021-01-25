module.exports = {
    name: 'reactionrole',
    description: 'initiates a reaction role embed',
    async execute(client, message, args, Discord) {

        //Const var to be called later
        const channel = '802350802555371551';
        const goblinRole = message.guild.roles.cache.find(role => role.name === 'Goblin');
        const flightLessBirdRole = message.guild.roles.cache.find(role => role.name === 'Flightless Bird');
        const flatEartherRole = message.guild.roles.cache.find(role => role.name === 'Flat Earther');
        const programmerRole = message.guild.roles.cache.find(role => role.name === 'Programmer');
        const peanutRole = message.guild.roles.cache.find(role => role.name === 'Peanut');
        const apeRole = message.guild.roles.cache.find(role => role.name === 'Fucking Ape');

        const goblinEmoji = '🦦';
        const flightLessBirdEmoji = '🐧';
        const flatEartherEmoji = '🌎';
        const programmerEmoji = '💻';
        const peanutEmoji = '🥜';
        const apeEmoji = '🦍';

        //Generate text within embed
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your roles, my humans.')
            .setDescription('Choosing a role allows people to affiliate with certain attributes.\n\n'
                + `${goblinEmoji} for goblins\n`
                + `${flightLessBirdEmoji} for flightLessBirds\n`
                + `${flatEartherEmoji} for flat earthers\n`
                + `${programmerEmoji} for programmers\n`
                + `${peanutEmoji} for peanuts\n`
                + `${apeEmoji} for absolute apes`);
        
        //Generate widgets under embed to be clicked on
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(goblinEmoji);
        messageEmbed.react(flightLessBirdEmoji);
        messageEmbed.react(flatEartherEmoji);
        messageEmbed.react(programmerEmoji);
        messageEmbed.react(peanutEmoji);
        messageEmbed.react(apeEmoji);

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
            } else {
                return;
            }
        });
    }
}