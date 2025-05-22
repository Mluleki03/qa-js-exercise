const exercise6 =async ()=>
    {
        console.log('Exercise 6');

        // Please Complete Exercise 6 here
        /*const req= fetch('https://jsonplaceholder.typicode.com/users')
        .then(user=> user.json())
        .then(data =>{
            data.forEach( users => {
                console.log(`User: ${users.name}`, `email: ${users.email}`, `company: ${users.company.name}`);});});


*/
        try{
            const userFeedback = await fetch('https://jsonplaceholder.typicode.com/users');  /// Number 1 : sending api request to 
            const users = await userFeedback.json();   // Api response 
            console.log('\n --- Users ---');

            // Method looping through the array of objecs for each user and then selecting the Key we want value of
            users.forEach(user =>{
                console.log(`Name: ${user.name}, Email: ${user.email}, companyName: ${user.company.name} `);
            });

        }catch(error){
            console.log('Error retrieving users:', error);

        }
        /////////////// Number 3 /////////////
        console.log('\n---- Fetch Posts and Logging titles ---')
        try{
            const postRequest = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await postRequest.json();
            console.log('\n --- Post Titles ---');

            posts.forEach(post =>{
                console.log(`Post Title: ${post.title}`);
            });
            
            // filters  through array of objects and search the key value of Title and switch the string value of it to lower case inorder, to find the ones containing 'qui' and store them while keeping count
            const quiCount = posts.filter( post =>
                post.title.toLowerCase().includes('qui')).length;

            console.log('\nThe number of post with titles containing "qui" :', quiCount);
            
        }catch(error){
            console.log('Error retrieving post titles: ', error);
        }

        // End of Exercise 6
        console.log('\n');

        console.log("Exercise 6 completed");
    }

module.exports = exercise6;
