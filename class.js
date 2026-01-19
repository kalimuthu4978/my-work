/*let a  =25;
console.log(a); */


/*let number = [3,5,1,4,2];

function compareFn(a,b){
    console.log(`a: ${a}, b: ${b}`);
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }
}

number.sort(compareFn);

console.log(number);*/

let words = ['banana', 'apple', 'orange', 'kiwi', 'grape', 'mango', 'strawberry', 'blueberry'];

/* let index = 0;
while(index < words.length){
    console.log(words[index]);
    index++;
} */

/* for(let i = 0; i <  words.length; i++){
    console.log(words[i]);
} */

// for  ....... in loop - takes the index of the array, cannot control the iteration, it will be squential, 
// all values will be run, may be skip it inside teh loop using consition inside the for loop
/* for(let index in words){
    console.log(words[index]);
} */

// for .... of loop takes the value of the array, cannot control the iteration, it will be squential, 
// all values will be run, may be skip it inside teh loop using consition inside the for loop
/* for(let word of words){
    console.log(word);
} */

// forEach loop - it is a method of the array, it takes a callback function as an argument
/* words.forEach(function(word, index){
    console.log(index, word);
}); */

/* words.forEach((value, index) => {
    console.log(value, index);
}); 
 */
// map method - it is used to create a new array by applying a function to each element of the original array

//let fruits = ['banana', 'apple', 'orange', 'kiwi', 'grape', 'mango', 'strawberry', 'blueberry'];

/* let numb = [3,4,1,5,2];
let sqnumb = [];
// Normal method
for (let i = 0; i <numb.length; i++){
    sqnumb[i] = numb[i]**2;
}

console.log(numb);
console.log(sqnumb)


// map method
let sqdnumb = numb.map(function(i){
    return i**2;   
    })

console.log(sqdnumb);

// using arrow function
let sqrtnumb = numb.map(i => i**2);
console.log(sqrtnumb);  */ 

//filter method - it is used to create a new array by filtering the elements of the original array based on a condition


let numb = [3,4,1,5,2];
/*function filt(f) {
    if (f > 3) {
        return true;
    }

}

console.log(numb.filter(filt));*/

// using arrow function
/* let filtnum = numb.filter(f=> f>2);
console.log(filtnum);

let evennumb = numb.filter(f=> f%2 ==0);
console.log(evennumb);*/ 
let sum = 0
//reduce method - it is used to reduce the array to a single value by applying a function to each element of the array
//normal method
/* for(let i= 0; i<numb.length; i++){
    sum = sum + numb[i]
}
console.log(sum); */

// reducer method
/* let redsum = numb.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(redsum);

function red(a,b) {
    console.log(`a: ${a}, b: ${b}`);    
    return a + b;
}
console.log(numb.reduce(red));
 */

//JS object vs JSON (JavaScript Object Notation)
//JS Object
let me = {
    name: "John Doe",
    age: 30,
    profession: "Engineer",
    location : "Coimbatore"
}

/* console.log(me);
console.log(me.name);
console.log(me["name"]); */

//JSON      
let jsonme = '{ "name": "John Doe", "age": 30, "profession": "Engineer", "location" : "Coimbatore" }';


// JS oBbject vs JSON
// JS object - properties are not enclosed in double quotes, functions are allowed as values
// JSON - properties are enclosed in double quotes, functions are not allowed as values

console.log(JSON.stringify(me)) //converts JS object to JSON string

console.log(JSON.parse(jsonme)) // converts JSON string to JS object

// key value pairs - properties
// key - string
// value - any data type (string, number, boolean, array, object, function)
for (let key in me){
    console.log(`${key} : ${me[key]}`);
}
console.log(Object.keys(me)); // returns an array of keys
console.log(Object.values(me)); // returns an array of values
console.log(Object.entries(me)); // returns an array of key value pairs as arrays