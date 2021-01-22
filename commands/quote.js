module.exports = {
    name: 'quote',
    description: 'greets users new to the command system',
    execute(client, message, args, Discord){
        const randomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        
        console.log(randomNumber(5, 15));
    }
}