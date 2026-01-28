const promise = new Promise((resolve, reject) => { 
    resolve() // will call the fuction from below .then 
} );  // it needs an executor and rejector /*

promise
    .then (
        // success call back funciton assigned to resolve 
        () => {
            console.log("operation success")
        },
        // // failure call back funciton assigned to reject
        // () => {
        //     console.log("Operation failed")
        // }
    )
    // we cna use the cathc to get the reject statement 
    .catch(
        () => {
            console.log("operation failed")
        }
    )
