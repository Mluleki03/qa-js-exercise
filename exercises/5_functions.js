const exercise5 = ()=>
    {
        console.log('Exercise 5');

        // Please Complete Exercise 5 here
        function logResult(testName, passed){
            const status = passed ? "Pass" : "Fail";
            console.log(` Test: ${testName} : ${status}`);
            
        }
        logResult('Login Test', false)

        function calculateDuration(startTime, endTime){
            return endTime - startTime;
        }
        console.log('Resuts for the Duration function:');
        console.log('             ---------------------');
        console.log('The elapsed time is : ' + calculateDuration(2.3,6.7)+ 's');

        function formattedReport(testCase){
            const {testName, passed,startTime, endTime} = testCase;
            const duration = calculateDuration(startTime, endTime);
            logResult(testName, passed);
            return `Test Report for the test : ${testName} with a status: ${passed} and the duration for the test was ${duration}s!`;
        }

        const sample = {
            testName : 'Longin Functionality Test',
            passed: false,
            startTime: 2.5,
            endTime : 6.5
        };

        console.log(formattedReport(sample));

        console.log('');

        // End of Exercise 5
        console.log("Exercise 5 completed");
        console.log('');

    }


module.exports = exercise5;