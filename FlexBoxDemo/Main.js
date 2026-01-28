// const promise = new Promise(() => { 

// } );  // it needs an executor and rejector /*

// console.log(promise)

// Call Back - when a fucntion is passed as an argument ot another fucntion

function calc(operation, num1, num2) {
    return operation(num1, num2)
}

function add (num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1/num2;
}

console.log(calc(div,8,3))  // div is the callback function 
                            // calc is called higher order function
