const exercise2 = ()=>
    {
        console.log('Exercise 2');

        // Please Complete Exercise 2 here
        console.log(" ");

        let responseMessage = 'The test was deployed properly';
        console.log(responseMessage.trim().toLowerCase());   //changes string to lowercase
        console.log(responseMessage.includes('was'));        // checks if the 'was' is part of responseMessage string
        console.log(responseMessage.replace('properly', 'unproperly'));   // replace one word with another

        console.log(" ");

        // End of Exercise 2
        console.log("--- Exercise 2 completed ---");
        console.log('\n');



    }

module.exports = exercise2;