const exercise5 = ()=>
    {

        console.log('\n');
        console.log('Exercise 5');

        // Please Complete Exercise 5 here
        // number 1
        function logResult(testName, passed){
            const status = passed ? "Pass" : "Fail";
            console.log(` Test: ${testName} : ${status}`);
            
        }
        logResult('Login Test', false)  // calling the method

        function calculateDuration(startTime, endTime){
            return endTime - startTime;
        }
        console.log('\n --- Resuts for the Duration function ---');
        console.log('The elapsed time is : ' + calculateDuration(2.3,6.7)+ 's');

        
        
        const sample = {
            testName : 'Longin Functionality Test',
            passed: false,
            startTime: 2.5,
            endTime : 6.5
        };

        function formattedReport(testCase){
            const {testName, passed,startTime, endTime} = testCase;  // shorthand for declaring 
            const duration = calculateDuration(startTime, endTime);  // Calls function already declared 
            //logResult(testName, passed);
            return `Test Report for the test : ${testName} with a status: ${passed} and the duration for the test was ${duration}s!`;
        }

        console.log('\n');

        console.log(formattedReport(sample));  // calss function and using passing parameter through sample object 

        console.log('');

        // End of Exercise 5
        console.log("--- Exercise 5 completed ---");
        console.log('');

    }


module.exports = exercise5;