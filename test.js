// Looping through Iterables
const str = "Hello World!"

//  - .length  is a property that every string has, returns a number of the length of chars.
// console.log(str.length)

for (let i = 0; i < str.length; i++){
    console.log(`This is str.i ${str[i]}`);
}

// For In Loop - allow us to loop over an iterable (string, array, object)
// declare an arbitrary variable that represents the index number
for(let char in str){
    console.log(`this is char ${str[char]}`);
}

// For Of Loops - allow us to loop over an iterable (string, array, object)
// declare an arbitrary variable that will directly reflect the VALUE at that index number
// ****you cannot access the index number easily****
for (let letter of str){
    console.log(`This is letter ${letter}`);
}