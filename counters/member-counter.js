module.exports = async (client) => {
    const guild = client.guilds.cache.get('751623701790720010');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('800764975987556382');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count')
    }, 1200000);
}