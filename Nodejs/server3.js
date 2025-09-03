// Creating local modules


const logger = {
    info:()=> {
        console.log("The server is able to run successfully");
    },
    warning:()=> {
        console.log("Don't use this thing again");
    },
    error:()=> {
        console.log("Errors while generating the response");
    }
}


module.exports = logger;