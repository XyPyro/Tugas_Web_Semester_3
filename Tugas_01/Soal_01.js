const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your first name: ", (firstName) => {
  rl.question("Enter your last name: ", (lastName) => {
    rl.question("Enter your birth year: ", (birthYear) => {
      birthYear = parseInt(birthYear);
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      console.log(`Hello, ${firstName} ${lastName}! You are ${age} years old.`);

      rl.close(); 
    });
  });
});
