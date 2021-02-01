module.exports = async (client) => {

    //Locate the channel housing the memeber count
    const guild = client.guilds.cache.get('751623701790720010');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('800764975987556382');

        //Set the correct memeber count every one minute
        channel.setName(`Total Users: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count')
    }, 120000);
}