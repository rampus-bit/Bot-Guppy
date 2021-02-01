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

// var photo = "yes";
// if (photo == "yes") {
//  alert("Thank you StackOverflow, you're a very big gift for all programmers!");
//  capturePhoto();
// } else {
//   alert("StackOverflow.com must help me!");
// }

//Goals:
//I want the function to randomly select a number, and give a quote.

//Assign quotes to various numbers, and have it print if the number happens.

// const quoteSelect = require('quoteSelect');
//
// module.exports = {
//   name: 'quote',
//   description: 'gives a random quote'
//   async execute(client, message, args, Discord) {
//     const random_number = quoteSelect.readdirSync
//     }
// }
