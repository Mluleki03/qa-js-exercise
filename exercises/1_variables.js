function exercise1()
    {
        console.log('\n');
        console.log('Exercise 1');
        console.log('\n');


        // Please Complete Exercise 1 here
        let testName = "Login Test";
        const isPassed = true;
        let executionTime = 2.35;
        let message = null;
        let time;

        console.log("The value of testName before : "+ testName);
        testName ="Login Passed";
        console.log("The value of testName after : "+ testName);

        console.log("/////////");

        console.log("The value of executionTime before : "+ executionTime);
        executionTime = 2.63;
        console.log("The value of executionTime after : "+ executionTime);

        console.log("/////////");

        console.log("The value of message before : "+ message);
        message="Its tough neih";
        console.log("The value of message after : "+ message);

        console.log("/////////");

        console.log("The value of time before : "+ time);
        time=2;
        console.log("The value of time after : "+ time);

        console.log('\n');


        console.log(`testName: ${testName} | Type: ${typeof testName}`);
        console.log(`isPassed: ${isPassed} | Type: ${typeof isPassed}`);
        console.log(`executionTime: ${executionTime} | Type: ${typeof executionTime}`);
        console.log(`message: ${message} | Type: ${typeof message}`); // typeof null is "object"
        console.log(`time:" ${time}, | Type: ${typeof time}`);
        console.log('\n');


        // End of Exercise 1
        console.log("--- Exercise 1 completed ---");
        console.log('\n');

    }

module.exports = exercise1;