import  * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDIJJ_uu24IHqJqsoiRiEz3HlgAeutnD2U",
    authDomain: "expensify-78011.firebaseapp.com",
    databaseURL: "https://expensify-78011.firebaseio.com",
    projectId: "expensify-78011",
    storageBucket: "expensify-78011.appspot.com",
    messagingSenderId: "405213195998",
    appId: "1:405213195998:web:63e180bdbcf17ee3e29c4f",
    measurementId: "G-BD4HCBSZ87"

};

firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default} ; 
    
//child.removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child.added
// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     decription: 'Rent',
//     note: 'Paid',
//     amount: 1440,
//     createdAt: 1345
// })

// database.ref('expenses').push({
//     decription: 'Gas Bill',
//     note: 'Paid',
//     amount: 45,
//     createdAt: 1989
// })

// database.ref('expenses').push({
//     decription: 'Water Bill',
//     note: 'Paid',
//     amount: 25,
//     createdAt: 1231
// })
// database.ref('notes').push({
//     title: 'Course training',
//     body: 'React.js'
// });


    /**** Using on to Subcribe/fetch data */
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });

//     console.log(expenses);
// })

    /*** Using once to Subcribe/fetch data *********/
// database.ref('expenses')
//     .once('value', (any))
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     });


    /**** Using on to subcribe/fetch data **********/

// database.ref().on('value' , (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

    /** Using once to fetch the data *************/

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {

//     const val = snapshot.val();
//     console.log(val);

// })
// .catch(() => {
//     console.log('Error fetching data');

// });


    /* ******** Updating ********** */

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//  });
// database.ref().update({
//    job: 'Manager',
//   'location/city': 'Chicago'
// });

    //*********** Setting data **********/

    // database.ref().set({
//     name: 'Zohair',
//     age: 29,
//     stressLevel: 1,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'New York',
//         country:'USA'
        
//     }
    
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e)
// });

//database.ref().set("This is my date");

    //*****Changing data ***************/

// database.ref('age').set(30);
// database.ref('location/city').set('New Jersey');

    /* **********Removing data **********/

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Sorry, not removed' , e);
// });

    /******* Using set(null) to Remove data ****************/
// database.ref().set(null);
