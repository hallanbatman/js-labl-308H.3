//“Fizz Buzz”

// Loop through all numbers from 1 to 100.
console.log(`Loop through all numbers from 1 to 100.`)

let num = 1;
while (num <= 100) {

    if (((num % 3) + (num % 5)) == 0) {//is divisible by both 3 and 5?
        console.log(`${num} divisible by 3 & 5 "Fizz Buzz”`)

    } else if (num % 3 == 0) {//is divisible by 3?
        console.log(`${num} is divisible by 3 "Fizz"`)

    } else if (num % 5 == 0) {//is divisible by 5?
        console.log(`${num} is divisible by 5 “Buzz”`)

    } else {
        console.log(num)
}
    num++;
}