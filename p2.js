// Part 2: Prime Time
// Declare an arbitrary number, n.
let num = 0

// Create a loop that searches for the next prime number, starting at n and incrementing from there.
console.log(`Loop through n untill prime is found`)

for (let num = 0; num <= 10; num++) {
    if (num > 1 && num % 1 === 0 && num % num == 0) {
        console.log(`${num} is prime.`);
    }
}

// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.