// const person = {
//     name: 'Zohair',
//     age: 29,
//     location: {
//         city: 'New York',
//         temp: 90
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
//  if (city && temperature) {
//      console.log(`I't ${temperature} in ${city}.`)
//  }

// const book = {
//     title: 'Ego',
//     author: 'Ryan Hoilday',
//     publisher: {
//        // name: 'Lion'
//     }
// }
// const {name: publisherName = 'Self-Published'} = book.publisher;
// const {title , author} = book;
// console.log(`${title} written by ${author}`);
// console.log(publisherName);

// const address= [" 7 East Ave Lane", "New York", "Adam St", "Pensiliva"];
// const[, city, state= "New York"] = address;
// console.log(`You are in ${city} ${state},`);

// const item = ['ice', '2.00', '2.50', '2.75'];
// const [itemName, , , ,mediumPrize ]= item
// console.log(`A medium ${itemName} Coffee cost ${mediumPrize}`)
