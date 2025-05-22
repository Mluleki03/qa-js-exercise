const exercise4 = ()=>
    {
        console.log('Exercise 4');

        // Please Complete Exercise 4 here
        console.log('\n');

        let steps = ["Navigate to login", "Enter credentials", "Submit form", "View Dashboard","Log out"];
        console.log(`The index for the following steps is as follows:`);
        
        /*console.log('\n');
        let logIndex = steps.forEach((step,i)=> console.log(`Step ${i +1}: ${step}`));
        console.log(logIndex);
        let upper = steps.map(up => up.toUpperCase());
        console.log(console.log(upper));*/

        steps.forEach((step, i) =>{
            console.log(`Step ${i + 1}: ${step} `);
        });

        let upper = steps.map(up => up.toUpperCase());


        console.log('');
        for(let i =0;i< steps.length; i++){
            console.log(`Executing step: ${steps[i]}`);
        }

        console.log('');

        // End of Exercise 4
        console.log("--- Exercise 4 completed ---");
    }   

module.exports = exercise4;
