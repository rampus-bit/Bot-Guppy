module.exports = {
    name: 'leave',
    description: 'stops playing audio, and leaves the room',
    async execute(client, message, args, Discord){
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a voice channel in order to stop the music.');
        await voiceChannel.leave();
        await message.channel.send('Leaving Channel :smiling_face_with_tear:')
    }
}
