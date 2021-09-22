const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');

//Define name and description of command
module.exports = {
    name: 'play',
    description: 'joins, and plays a youtube video',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        
        //check to see if the command can run correctly
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel in order to run this command.');
        const permissions = voiceChannel.permissionsFor(message.client.user);

        if(!permissions.has('CONNECT')) return message.channel.send('You do not have the correct permissions.');
        if(!permissions.has('SPEAK')) return message.channel.send('You do not have the correct permissions.');
        if(!args.length) return message.channel.send('You need to send the second argument.');

        //Intake, and process a URL
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
 
            const connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:musical_note: Now Playing ***Your Link!***`)
 
            return
        }

        //Connect to voice channel
        const connection = await voiceChannel.join();

        //Process youtube video into an MP3
        const videoFinder = async (query) => {
            const videoResult = await ytsearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        //Join, leave, play, and confirm music
        const video = await videoFinder(args.join(''));
        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    voiceChannel.leave();    
            });

            await message.reply(`:musical_note: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found.');
        }
    }
}
