// //you can declair an example by
// var example = [true, 42, "and you"];
// var alt = new array(true, 42, "and you"); //but don't do this. It is too LOOOOOOOOOONG


// console.log("example item 1: " + example[0]);
// console.log("example item 2: " + example[1]);
// console.log("example item 3: " + example[2]);

// console.log("alternative example item 1: " + alt[0]);
// console.log("alternative example item 2: " + alt[1]);
// console.log("alternative example item 3: " + alt[2]);

// example[0] = false; // you can change items in an example


// console.log(example);

// //nameOfexample.length will give you the length of an example

// console.log("example length is " + example.length);

// console.log("the first item in example is " + example[0] + ". the last item in example is " + example[example.length - 1]);

// //you can add on to an example by the following methods
// example.push("Alt");

// example[example.length] = " + f4";


// example[5] = "☺";

// //returning an item then deleting it
// example.push("elvis☺");
// console.log(example[example.length - 1]);
// example.pop();
// console.log(example);

// //swaping items in lists
// var temp = example[0];
// example[0] = example[1];
// eample[1] = temp;

// //copying arrays
// var copy = example.concat();

// console.log(copy);

// //returns the index where the element is located in the array
// console.log(example.indexOf("☺"));

// example = example.sort();

// console.log(example);

// //https://github.com/BearN99/Profile/blob/master/csquared%20dev/scripts/main.js












function fizzBuzz(num){
    let fzBz = "";
    if ((num % 3) == 0)
    {
        fzBz += "Fizz";
    }

    if ((num % 5) == 0) 
    {
        fzBz += "Buzz";
    }
    return fzBz;
}

let x = 1;
while (x <= 100) {
    console.log(`${x} ${fizzBuzz(x)}`);
    x++;
}



// let name = "Elvis";
// let age = 33;

// function example(name, age){
//     console.log(name + " is " + age + " years old.");
//     console.log(`${name} is ${age} years old.`);
// }

// example(name, age);


//document.querySelector == good


const test = document.querySelector('#test');

test.addEventListener('click', event => {
    test.textContent = "placeHolder";
})

/*const button = document.querySelector('button');

button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
});*/