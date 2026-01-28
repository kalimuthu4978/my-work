const promise = new Promise((resolve, reject) => { 
    reject()
} );  // it needs an executor and rejector /*

promise
    .then (
        // success call back funciton
        () => {
            console.log("operation success")
        },
        () => {
            console.log("Operation failed")
        }
    )
