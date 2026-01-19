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

let numb = [3,4,1,5,2];
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
console.log(sqrtnumb);  