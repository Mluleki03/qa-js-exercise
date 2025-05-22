const exercise4 = ()=>
    {
        console.log('Exercise 4');

        // Please Complete Exercise 4 here
        let steps = ["Navigate to login", "Enter credentials", "Submit form", "View Dashboard","Log out"];
        console.log(`The index for the following steps is as follows:`);
        console.log(`${steps[0]} : ${steps.indexOf('Navigate to login')} `);
        console.log(`${steps[1]} : ${steps.indexOf('Enter credentials')} `);
        console.log(`${steps[2]} : ${steps.indexOf('Submit form')} `);
        console.log(`${steps[3]} : ${steps.indexOf('View Dashboard')} `);
        console.log(`${steps[4]} : ${steps.indexOf('Log out')} `);
        console.log('');
        let upper = steps.map(up => up.toUpperCase());
        console.log(console.log(upper));
        console.log('');
        for(let i =0;i< steps.length; i++){
            console.log(`Executing step  ${steps[i]}`);
        }

        console.log('');

        // End of Exercise 4
        console.log("Exercise 4 completed");
    }   

module.exports = exercise4;
