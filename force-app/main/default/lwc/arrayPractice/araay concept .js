

// console.log('this is working now so we can  do the practice now')
// // must know things
// // loops









// // reduce method 

// // reduce method is used to reduce the the array to single value 
// // here are some example 

// const arr = [1,2,22,222 ,1 ]

// const totol = arr.reduce((newtotoal,item)=>{   // it take two function 
//     return newtotoal+=item;

// },0)  // here the zero is the intital value of the accumulator that is newtotol over here

// console.log(totol)

// const totaltest = arr.reduce((accu,item)=>{
// return accu+=item
//  },0)          // we have to place a coma after this

//  console.log('xyz'+totaltest);  // it always return somthing



//  const testreduce = arr.reduce((accu,item)=>{
//   return item+accu

//  },1000)
//   console.log('===>',testreduce)
// // there are two use of reducce  
// // 1. it is used to caluculate the sum 



// //now lets take consider array of object 




// const arrysample = [
//     {a: 23},
//     {b: 39},
//     {c: 33},
//     {a: 99}
// ];

// const nt = arrysample.reduce((sum, element) => {
//     // Check if 'a' property exists in the current object
//     if ('a' in element) {
//         // Add the value of 'a' to sum
//         return sum + element.a;
//     } else {
//         // If 'a' property doesn't exist, return sum unchanged
//         return sum;
//     }
// }, 0);

// console.log(nt); // Output: 122 (23 + 99)





// const arrysample1 = [
//     {a: 23},
//     {b: 39},
//     {c: 33},
//     {a: 99}
// ];

// const net = arrysample.reduce((sum, {a}) => {
//     // Destructure 'a' property from the current object
//     // If 'a' property exists, add its value to sum
//     return a ? sum + a : sum;
// }, 0);

// console.log('ssdsdf', net); // Output: 122 (23 + 99)


// const arrysample2 = [
//     {a: 23},
//     {b: 39},
//     {c: 33},
//     {a: 99}
// ];
// // lets calculate the total of all the elements;

// const net2 = arrysample2.reduce((sum,{a,b,c})=>{

//     return sum+= a?a:0
// },0)

// console.log('newtotoal of a',net2)


// const expenses = [
//     { id: 1, amount: 50, category: 'Food' },
//     { id: 2, amount: 30, category: 'Transportation' },
//     { id: 3, amount: 100, category: 'Food' },
//     { id: 4, amount: 20, category: 'Entertainment' }
//   ];

//   const net3= expenses.reduce((total,element)=>{ 
//     return total+=element.amount? element.amount:0
// },0)
//   console.log(net3);



//   const expenses2 = [
//     { id: 1, amount: 50, category: 'Food' },
//     { id: 2, amount: 30, category: 'Transportation' },
//     { id: 3, amount: 100, category: 'Food' },
//     { id: 4, amount: 20, category: 'Entertainment' }
//   ];

//   const categoryTotal = expenses2.reduce((accumulator, expense) => {
//     if (accumulator[expense.category]) {
//       accumulator[expense.category] += expense.amount;
//     } else {
//       accumulator[expense.category] = expense.amount;
//     }
//     return accumulator;
//   }, {});
  
//   console.log(categoryTotal);
  
//   // try more of above type 
//   // start using reduce in your daily working




//   // for now  this is all about reduce

// // filter method 
// // it will reduce a array of filterd result 


// const arrysamp = [
//   {a: 3},
//   {b: 9},
//   {b: 3},
//   {a: 99}
// ];

// // there are two case we have to calulate sum of a , b 

// // and net sum a,a  and b,b

// // lets net sum 

// const sumofa = arrysamp.reduce((accu,item)=>{
//      return accu += item.a?item.a:0
// },0)
//   console .log(sumofa)

//   const sumofb= arrysamp.reduce((accu,item)=>{
//     return accu += item.b?item.b:0
//   },0)
//   console.log(sumofb);

//   const sumofall= arrysamp.reduce((accu,item)=>{
//     if(item.a){
//       accu+=item.a;

//     }
//     else
//       accu+=item.b
//     return accu
    
//   },0)
//   console.log(sumofall)
//   // without using return  accu will not return any thing


//   // simplifing array using reduce 



//   const expenses3 = [
//     { id: 1, amount: 50, category: 'Food' },
//     { id: 2, amount: 30, category: 'Transportation' },
//     { id: 3, amount: 100, category: 'Food' },
//     { id: 4, amount: 20, category: 'Entertainment' }
//   ];

//   const categoryTotal3 = expenses3.reduce((accumulator, expense) => {
//     if (accumulator[expense.category]) {
//       accumulator[expense.category] += expense.amount;
//     } else {
//       accumulator[expense.category] = expense.amount;
//     }
//     return accumulator;
//   }, {});
  
//   console.log(categoryTotal3);


//   // over here we have initilized accumulator as the empty object

//  // lets take an example 
//  const testarr= [
//   {a:123,c:'abc', q:345},
//   {a:222,c:'bba', q:112},
//   {a:123,c:'abc', q:345},
//   {a:123,c:'abc', q:345},
//  ]

// // now we wish to reduce this arry to only one of each type 

// const newarrye= testarr.reduce((acc,item)=>{
//   if(acc[item.c])
//       acc[item.c]+=item.q
//     else
//     acc[item.c]=item.q
//      return acc
// },{})

// console.log(newarrye)


// // here we got catogeries wise sum by using reduce 





// //////

// // // important object methods 


// // Objects in JavaScript are collections of key/value pairs.
// // The values can consist of properties and methods, and may contain
// // all other JavaScript data types, such as strings, numbers, and Booleans.

// // Object.assign()
// // //Copies the values of all enumerable own properties from one or more source objects to a target object.

// // Object.fromEntries()
// // //Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

// // const entries = [['a', 1], ['b', 2], ['c', 3]];
// // const obj = Object.fromEntries(entries);
// // console.log(obj); // { a: 1, b: 2, c: 3 }




// // Object.is()
// / //Compares if two values are the same value. Equates all NaN values (which differs from both IsLooselyEqual used by == and IsStrictlyEqual used by ===).

// // Object.keys()
// // Returns an array containing the names of all of the given object's own enumerable string properties.

// // Object.values()
// // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
// // Object.entries()


// //Object.create()

// // The Object.create() method is used to create a new object and link it to the 
// //prototype of an existing object.

// // We can create a job object instance, and extend it to a more specific object.

// // Initialize an object with properties and methods
// // const jobw = {
// //   position: 'cashier',
// //   type: 'hourly',
// //   isAvailable: true,
// //   showDetails() {
// //       const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

// //       console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
// //   }
// // };

// // // Use Object.create to pass properties
// // const barista = Object.create(job);

// // barista.position = "barista";
// // barista.showDetails();

// // output The barista position is hourly and is accepting applications.
// //The barista object now has one property — position — but all the other 
// //properties and methods from job are available through the prototype. Object.create() 
// //is useful for keeping code DRY by minimizing duplication.

// // const objectsss = {
// //  a:20,
// //  b:30,
// //  c:40

// // }

// // const updateObject = Object.create(objectsss)
// // console.log(objectsss)
// // console.log(updateObject);
// // updateObject.c=55;
// // console.log(updateObject);//{c:55}
// // console.log(updateObject.b)//30
// // console.log(updateObject.a)//20 

// // Object.keys()
// // Object.keys() creates an array containing the keys of an object.

// // We can create an object and print the array of keys.

// // // Initialize an object
// // const employees = {
// // 	boss: 'Michael',
// // 	secretary: 'Pam',
// // 	sales: 'Jim',
// // 	accountant: 'Oscar'
// // };

// // Get the keys of the object
// // const keys = Object.keys(employees);

// // console.log(keys);

// //Output
// //["boss", "secretary", "sales", "accountant"]
// //As Object.keys converts your object’s keys into an array of keys, 
// //the forEach() array method can be used to iterate through the keys and values.
// // Iterate through the keys
// // Object.keys(employees).forEach(key => {
// //   let value = employees[key];

// //  console.log(`${key}: ${value}`);
// // });

// // Output
// // boss: Michael
// // secretary: Pam
// // sales: Jim
// // accountant: Oscar

// // Object.keys is also useful for checking the length of the converted 
// // array using the length property.

// // Object.values()
// // Object.values() creates an array containing the values of an object.

// // Initialize an object
// // const session = {
// //   id: 1,
// //   time: `26-July-2018`,
// //   device: 'mobile',
// //   browser: 'Chrome'
// // };

// // Get all values of the object
// // const values = Object.values(session);

// // console.log(values);//[1, "26-July-2018", "mobile", "Chrome"]

// //Object.keys() and Object.values() allow you to return the data from an object.

// //Object.entries()
// //Object.entries() creates a nested array of the key/value pairs of an object.
// // Initialize an object
// // const operatingSystem = {
// //   name: 'Ubuntu',
// //   version: 18.04,
// //   license: 'Open Source'
// // };

// // Get the object key/value pairs
// // const entries = Object.entries(operatingSystem);

// // console.log(entries);//Output
// // [
// //     ["name", "Ubuntu"]
// //     ["version", 18.04]
// //     ["license", "Open Source"]
// // ]


// // Once we have the key/value pair arrays, 
// // we can use the forEach() method to loop through and work with the results.

// // Loop through the results
// // entries.forEach(entry => {
// //   let key = entry[0];
// //   let value = entry[1];

// //   console.log(`${key}: ${value}`);
// // });

// // output
// // name: Ubuntu
// // version: 18.04
// // license: Open Source

// // Object.assign() is used to copy values from one object to another.

// // We can create two objects, and merge them with Object.assign().

// // Initialize an object
// // const name = {
// //   firstName: 'Philip',
// //   lastName: 'Fry'
// // };

// // // Initialize another object
// // const details = {
// //   job: 'Delivery Boy',
// //   employer: 'Planet Express'
// // };

// // Merge the objects
// // const character = Object.assign(name, details);

// // console.log(character);//{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}


// // array methods
// //array.push(element1, ..., elementN);
// // let array = [1, 2, 3];
// // array.push(4, 5);
// // console.log(array); // Output: [1, 2, 3, 4, 5]

// // let array1 = [{ id: 1, name: 'John' }];
// // let newObj = { id: 2, name: 'Jane' };

// // array.push(newObj);

// // console.log(array); 
// // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]


// // array.pop().
// //The pop() method in JavaScript is used to remove the last 
// //element from an array and returns that element.
// // This method mutates the array by removing the last element.
// //array.pop()


// // let array = [1, 2, 3];
// // let removedElement = array.pop();
// // console.log(removedElement); // Output: 3
// // console.log(array); // Output: [1, 2]


// // let arrayOfObjects = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }];
// // let removedObject = arrayOfObjects.pop();

// // console.log(removedObject); // Output: { id: 3, name: 'Alice' }
// // console.log(arrayOfObjects); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]


// // arr.shift()


// // The shift() method in JavaScript is used to remove the first element from 
// // an array and returns that removed element. 
// // This method changes the length of the array.

// // let array = [1, 2, 3];
// // let removedElement = array.shift();

// // console.log(removedElement); // Output: 1
// // console.log(array); // Output: [2, 3]

// // let arrayOfObjects = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }];
// // let removedObject = arrayOfObjects.shift();

// // console.log(removedObject); // Output: { id: 1, name: 'John' }
// // console.log(arrayOfObjects); // Output: [{ id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }]


// // arr.unshift(...items) – adds items to the beginning.


// // // 
// // The unshift() method in JavaScript is used to add one or more elements to the beginning of an array,
// //  and it returns the new length of the array after the elements have been added.

// // let array = [1, 2, 3];
// // let newLength = array.unshift(0);

// // console.log(newLength); // Output: 4
// // console.log(array); // Output: [0, 1, 2, 3]


// // let array = [1, 2, 3];
// // let newLength = array.unshift(-2, -1, 0);

// // console.log(newLength); // Output: 6
// // console.log(array); // Output: [-2, -1, 0, 1, 2, 3]

// // //let arrayOfObjects = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// // let newObj1 = { id: 0, name: 'Alice' };
// // let newObj2 = { id: -1, name: 'Bob' };

// // arrayOfObjects.unshift(newObj1, newObj2);

// // console.log(arrayOfObjects);
// // // Output: [{ id: 0, name: 'Alice' }, { id: -1, name: 'Bob' }, { id: 1, name: 'John' }, { id: 2, name: 'Jane' }]



// // now we will see index in action 
// // some of very important methods in array uses index for there operation

// // let arr = ["I", "go", "home"];

// // delete arr[1]; // remove "go"

// // alert( arr[1] ); // undefined

// // // now arr = ["I",  , "home"];
// // alert( arr.length ); // 3

// // //The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

// // That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

// // So, special methods should be used.




// // link in case of doubt 

// // The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// // The syntax is:

// // arr.splice(start[, deleteCount, elem1, ..., elemN])
// // It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

// // This method is easy to grasp by examples.

// // Let’s start with the deletion:

// // let arr = ["I", "study", "JavaScript"];

// // arr.splice(1, 1); // from index 1 remove 1 element

// // alert( arr ); // ["I", "JavaScript"]
// // Easy, right? Starting from the index 1 it removed 1 element.

// // In the next example we remove 3 elements and replace them with the other two:

// // let arr = ["I", "study", "JavaScript", "right", "now"];

// // // remove 3 first elements and replace them with another
// // arr.splice(0, 3, "Let's", "dance");

// // alert( arr ) // now ["Let's", "dance", "right", "now"]
// // Here we can see that splice returns the array of removed elements:

// // let arr = ["I", "study", "JavaScript", "right", "now"];

// // // remove 2 first elements
// // let removed = arr.splice(0, 2);

// // alert( removed ); // "I", "study" <-- array of removed elements
// // The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

// // let arr = ["I", "study", "JavaScript"];

// // // from index 2
// // // delete 0
// // // then insert "complex" and "language"
// // arr.splice(2, 0, "complex", "language");

// // alert( arr ); // "I", "study", "complex", "language", "JavaScript"
// // Negative indexes allowed
// // Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

// // let arr = [1, 2, 5];

// // // from index -1 (one step from the end)
// // // delete 0 elements,
// // // then insert 3 and 4
// // arr.splice(-1, 0, 3, 4);

// // alert( arr ); // 1,2,3,4,5
// // slice
// // The method arr.slice is much simpler than similar-looking arr.splice.

// // The syntax is:

// // arr.slice([start], [end])
// // It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

// // It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

// // For instance:

// // let arr = ["t", "e", "s", "t"];

// // alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

// // alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
// // We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

// // concat
// // The method arr.concat creates a new array that includes values from other arrays and additional items.

// // The syntax is:

// // arr.concat(arg1, arg2...)
// // It accepts any number of arguments – either arrays or values.

// // The result is a new array containing items from arr, then arg1, arg2 etc.

// // If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

// // For instance:

// // let arr = [1, 2];

// // // create an array from: arr and [3,4]
// // alert( arr.concat([3, 4]) ); // 1,2,3,4

// // // create an array from: arr and [3,4] and [5,6]
// // alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // // create an array from: arr and [3,4], then add values 5 and 6
// // alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
// // Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

// // let arr = [1, 2];

// // let arrayLike = {
// //   0: "something",
// //   length: 1
// // };

// // alert( arr.concat(arrayLike) ); // 1,2,[object Object]
// // …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

// // let arr = [1, 2];

// // let arrayLike = {
// //   0: "something",
// //   1: "else",
// //   [Symbol.isConcatSpreadable]: true,
// //   length: 2
// // };

// // alert( arr.concat(arrayLike) ); // 1,2,something,else
// // Iterate: forEach
// // The arr.forEach method allows to run a function for every element of the array.

// // The syntax:

// // arr.forEach(function(item, index, array) {
// //   // ... do something with item
// // });
// // For instance, this shows each element of the array:

// // // for each element call alert
// // ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
// // And this code is more elaborate about their positions in the target array:

// // ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
// //   alert(`${item} is at index ${index} in ${array}`);
// // });
// // The result of the function (if it returns any) is thrown away and ignored.

// // Searching in array
// // Now let’s cover methods that search in an array.

// // indexOf/lastIndexOf and includes
// // The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

// // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// // arr.includes(item, from) – looks for item starting from index from, returns true if found.
// // Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

// // For instance:

// // let arr = [1, 0, false];

// // alert( arr.indexOf(0) ); // 1
// // alert( arr.indexOf(false) ); // 2
// // alert( arr.indexOf(null) ); // -1

// // alert( arr.includes(1) ); // true
// // Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

// // If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred.

// // The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

// // let fruits = ['Apple', 'Orange', 'Apple']

// // alert( fruits.indexOf('Apple') ); // 0 (first Apple)
// // alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
// // The includes method handles NaN correctly
// // A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

// // const arr = [NaN];
// // alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
// // alert( arr.includes(NaN) );// true (correct)
// // That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

// // find and findIndex/findLastIndex
// // Imagine we have an array of objects. How do we find an object with the specific condition?

// // Here the arr.find(fn) method comes in handy.

// // The syntax is:

// // let result = arr.find(function(item, index, array) {
// //   // if true is returned, item is returned and iteration is stopped
// //   // for falsy scenario returns undefined
// // });
// // The function is called for elements of the array, one after another:

// // item is the element.
// // index is its index.
// // array is the array itself.
// // If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// // For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

// // let users = [
// //   {id: 1, name: "John"},
// //   {id: 2, name: "Pete"},
// //   {id: 3, name: "Mary"}
// // ];

// // let user = users.find(item => item.id == 1);

// // alert(user.name); // John
// // In real life arrays of objects is a common thing, so the find method is very useful.

// // Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

// // The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

// // The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

// // Here’s an example:

// // let users = [
// //   {id: 1, name: "John"},
// //   {id: 2, name: "Pete"},
// //   {id: 3, name: "Mary"},
// //   {id: 4, name: "John"}
// // ];

// // // Find the index of the first John
// // alert(users.findIndex(user => user.name == 'John')); // 0

// // // Find the index of the last John
// // alert(users.findLastIndex(user => user.name == 'John')); // 3
// // filter
// // The find method looks for a single (first) element that makes the function return true.

// // If there may be many, we can use arr.filter(fn).

// // The syntax is similar to find, but filter returns an array of all matching elements:

// // let results = arr.filter(function(item, index, array) {
// //   // if true item is pushed to results and the iteration continues
// //   // returns empty array if nothing found
// // });
// // For instance:

// // let users = [
// //   {id: 1, name: "John"},
// //   {id: 2, name: "Pete"},
// //   {id: 3, name: "Mary"}
// // ];

// // // returns array of the first two users
// // let someUsers = users.filter(item => item.id < 3);

// // alert(someUsers.length); // 2
// // Transform an array
// // Let’s move on to methods that transform and reorder an array.

// // map
// // The arr.map method is one of the most useful and often used.

// // It calls the function for each element of the array and returns the array of results.

// // The syntax is:

// // let result = arr.map(function(item, index, array) {
// //   // returns the new value instead of item
// // });
// // For instance, here we transform each element into its length:

// // let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// // alert(lengths); // 5,7,6
// // sort(fn)
// // The call to arr.sort() sorts the array in place, changing its element order.

// // It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

// // For instance:

// // let arr = [ 1, 2, 15 ];

// // // the method reorders the content of arr
// // arr.sort();

// // alert( arr );  // 1, 15, 2
// // Did you notice anything strange in the outcome?

// // The order became 1, 15, 2. Incorrect. But why?

// // The items are sorted as strings by default.

// // Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".

// // To use our own sorting order, we need to supply a function as the argument of arr.sort().

// // The function should compare two arbitrary values and return:

// // function compare(a, b) {
// //   if (a > b) return 1; // if the first value is greater than the second
// //   if (a == b) return 0; // if values are equal
// //   if (a < b) return -1; // if the first value is less than the second
// // }
// // For instance, to sort as numbers:

// // function compareNumeric(a, b) {
// //   if (a > b) return 1;
// //   if (a == b) return 0;
// //   if (a < b) return -1;
// // }

// // let arr = [ 1, 2, 15 ];

// // arr.sort(compareNumeric);

// // alert(arr);  // 1, 2, 15
// // Now it works as intended.

// // Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

// // The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.

// // By the way, if we ever want to know which elements are compared – nothing prevents from alerting them:

// // [1, -2, 15, 2, 0, 8].sort(function(a, b) {
// //   alert( a + " <> " + b );
// //   return a - b;
// // });
// // The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.

// // A comparison function may return any number
// // Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.

// // That allows to write shorter functions:

// // let arr = [ 1, 2, 15 ];

// // arr.sort(function(a, b) { return a - b; });

// // alert(arr);  // 1, 2, 15
// // Arrow functions for the best
// // Remember arrow functions? We can use them here for neater sorting:

// // arr.sort( (a, b) => a - b );
// // This works exactly the same as the longer version above.

// // Use localeCompare for strings
// // Remember strings comparison algorithm? It compares letters by their codes by default.

// // For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.

// // For example, let’s sort a few countries in German:

// // let countries = ['Österreich', 'Andorra', 'Vietnam'];

// // alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

// // alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
// // reverse
// // The method arr.reverse reverses the order of elements in arr.

// // For instance:

// // let arr = [1, 2, 3, 4, 5];
// // arr.reverse();

// // alert( arr ); // 5,4,3,2,1
// // It also returns the array arr after the reversal.

// // split and join
// // Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

// // The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

// // In the example below, we split by a comma followed by space:

// // let names = 'Bilbo, Gandalf, Nazgul';

// // let arr = names.split(', ');

// // for (let name of arr) {
// //   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// // }
// // The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

// // let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

// // alert(arr); // Bilbo, Gandalf
// // Split into letters
// // The call to split(s) with an empty s would split the string into an array of letters:

// // let str = "test";

// // alert( str.split('') ); // t,e,s,t
// // The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

// // For instance:

// // let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// // let str = arr.join(';'); // glue the array into a string using ;

// // alert( str ); // Bilbo;Gandalf;Nazgul



// // for of loop


// // 1. Iterating over an Array
// // const arr = [1, 2, 3, 4];
// // console.log("Iterating over an Array:");
// // for (const element of arr) {
// //     console.log(element);
// // }

// // // 2. Iterating over a String
// // const str = "hello";
// // console.log("\nIterating over a String:");
// // for (const char of str) {
// //     console.log(char);
// // }

// // // 3. Iterating over Map Entries
// // const map = new Map([
// //     ['a', 1],
// //     ['b', 2],
// //     ['c', 3]
// // ]);
// // console.log("\nIterating over Map Entries:");
// // for (const [key, value] of map.entries()) {
// //     console.log(`${key}: ${value}`);
// // }

// // // 4. Iterating over Set
// // const set = new Set([1, 2, 3]);
// // console.log("\nIterating over Set:");
// // for (const num of set) {
// //     console.log(num);
// // }

// // // 5. Iterating over Array of Objects
// // const people = [
// //     { name: 'John', age: 30 },
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 35 }
// // ];
// // console.log("\nIterating over Array of Objects:");
// // for (const person of people) {
// //     console.log(`${person.name} is ${person.age} years old`);
// // }

// // // 6. Iterating over a Generator Function
// // function* gen() {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// // }
// // console.log("\nIterating over a Generator Function:");
// // for (const num of gen()) {
// //     console.log(num);
// // }


// // // 7. Nested Arrays
// // const nestedArray = [[1, 2], [3, 4], [5, 6]];
// // console.log("\nIterating over Nested Arrays:");
// // for (const innerArray of nestedArray) {
// //     for (const element of innerArray) {
// //         console.log(element);
// //     }
// // }

// // // 8. Custom Iterable Object
// // const customIterable = {
// //     [Symbol.iterator]: function* () {
// //         yield 'a';
// //         yield 'b';
// //         yield 'c';
// //     }
// // };
// // console.log("\nIterating over Custom Iterable Object:");
// // for (const item of customIterable) {
// //     console.log(item);
// // }

// // // 9. Iterating over DOM NodeList
// // const nodeList = document.querySelectorAll('div');
// // console.log("\nIterating over DOM NodeList:");
// // for (const node of nodeList) {
// //     console.log(node.textContent);
// // }

// // // 10. Iterating over Typed Arrays
// // const uint8Array = new Uint8Array([1, 2, 3]);
// // console.log("\nIterating over Typed Arrays:");
// // for (const num of uint8Array) {
// //     console.log(num);
// // }



// // // 1. Iterating over an Object's Entries
// // const obj = { a: 1, b: 2, c: 3 };
// // console.log("Iterating over an Object's Entries:");
// // for (const [key, value] of Object.entries(obj)) {
// //     console.log(`${key}: ${value}`);
// // }

// // // 2. Iterating over an Async Iterable
// // async function* asyncGen() {
// //     yield Promise.resolve(1);
// //     yield Promise.resolve(2);
// //     yield Promise.resolve(3);
// // }
// // console.log("\nIterating over an Async Iterable:");
// // for await (const num of asyncGen()) {
// //     console.log(num);
// // }

// // // 3. Iterating over a Proxy Object
// // const target = { a: 1, b: 2 };
// // const handler = {
// //     get(target, prop) {
// //         console.log(`Accessing property ${prop}`);
// //         return target[prop];
// //     }
// // };
// // const proxy = new Proxy(target, handler);
// // console.log("\nIterating over a Proxy Object:");
// // for (const key in proxy) {
// //     console.log(`${key}: ${proxy[key]}`);
// // }

// // // 4. Iterating over a Custom Iterable with Async Processing
// // const asyncIterable = {
// //     async *[Symbol.asyncIterator]() {
// //         yield Promise.resolve(1);
// //         yield Promise.resolve(2);
// //         yield Promise.resolve(3);
// //     }
// // };
// // console.log("\nIterating over a Custom Async Iterable:");
// // for await (const num of asyncIterable) {
// //     console.log(num);
// // }

// // // 5. Iterating over a Generator Function with Error Handling
// // function* genWithError() {
// //     yield 1;
// //     yield 2;
// //     throw new Error('Something went wrong');
// // }
// // console.log("\nIterating over a Generator Function with Error Handling:");
// // try {
// //     for (const num of genWithError()) {
// //         console.log(num);
// //     }
// // } catch (error) {
// //     console.error(error.message);
// // }

// // // 6. Iterating over a Huge Array Chunk by Chunk
// // const hugeArray = Array.from({ length: 10000 }, (_, index) => index + 1);
// // const chunkSize = 100;
// // console.log("\nIterating over a Huge Array Chunk by Chunk:");
// // for (let i = 0; i < hugeArray.length; i += chunkSize) {
// //     const chunk = hugeArray.slice(i, i + chunkSize);
// //     console.log(chunk);
// // }

// // // 7. Iterating over a Bidirectional Iterable
// // const bidirectionalIterable = {
// //     [Symbol.iterator]() {
// //         let count = 5;
// //         return {
// //             next() {
// //                 if (count > 0) {
// //                     return { value: count--, done: false };
// //                 }
// //                 if (count === 0) {
// //                     count--;
// //                     return { done: true };
// //                 }
// //                 return { done: true };
// //             },
// //             previous() {
// //                 if (count <= 5) {
// //                     return { value: count++, done: false };
// //                 }
// //                 return { done: true };
// //             }
// //         };
// //     }
// // };
// // console.log("\nIterating over a Bidirectional Iterable:");
// // let iterator = bidirectionalIterable[Symbol.iterator]();
// // let result = iterator.next();
// // while (!result.done) {
// //     console.log(result.value);
// //     result = iterator.previous();
// // }

// // // 8. Iterating over a Fibonacci Sequence with Generator Function
// // function* fibonacci() {
// //     let a = 0, b = 1;
// //     while (true) {
// //         yield a;
// //         [a, b] = [b, a + b];
// //     }
// // }
// // console.log("\nIterating over a Fibonacci Sequence with Generator Function:");
// // const fibonacciGenerator = fibonacci();
// // for (let i = 0; i < 10; i++) {
// //     console.log(fibonacciGenerator.next().value);
// // }

// // // 9. Iterating over a Circular Buffer
// // const circularBuffer = [1, 2, 3];
// // let currentIndex = 0;
// // console.log("\nIterating over a Circular Buffer:");
// // for (let i = 0; i < circularBuffer.length * 2; i++) {
// //     console.log(circularBuffer[currentIndex]);
// //     currentIndex = (currentIndex + 1) % circularBuffer.length;
// // }

// // // 10. Iterating over a Data Stream with an Async Generator
// // async function* dataStream() {
// //     for (let i = 0; i < 5; i++) {
// //         await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async data fetching
// //         yield i;
// //     }
// // }
// // console.log("\nIterating over a Data Stream with an Async Generator:");
// // for await (const data of dataStream()) {
// //     console.log(data);
// // }



// // 
// // // 1. Iterating over Object Properties
// // const obj = { a: 1, b: 2, c: 3 };
// // console.log("Iterating over Object Properties:");
// // for (const key in obj) {
// //     console.log(`${key}: ${obj[key]}`);
// // }

// // // 2. Iterating over Object's Prototype Properties
// // function Person(name) {
// //     this.name = name;
// // }
// // Person.prototype.age = 30;
// // const person = new Person('John');
// // console.log("\nIterating over Object's Prototype Properties:");
// // for (const key in person) {
// //     console.log(`${key}: ${person[key]}`);
// // }

// // // 3. Iterating over Array Indices
// // const arr = ['a', 'b', 'c'];
// // console.log("\nIterating over Array Indices:");
// // for (const index in arr) {
// //     console.log(`${index}: ${arr[index]}`);
// // }

// // // 4. Iterating over Array-like Objects
// // const obj2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// // console.log("\nIterating over Array-like Objects:");
// // for (const index in obj2) {
// //     console.log(`${index}: ${obj2[index]}`);
// // }

// // // 5. Iterating over DOM Elements in NodeList
// // const nodeList = document.querySelectorAll('div');
// // console.log("\nIterating over DOM Elements in NodeList:");
// // for (const index in nodeList) {
// //     console.log(nodeList[index].textContent);
// // }

// // // 6. Iterating over Function Properties
// // function greet() {
// //     console.log('Hello!');
// // }
// // greet.message = 'Greeting message';
// // console.log("\nIterating over Function Properties:");
// // for (const key in greet) {
// //     console.log(`${key}: ${greet[key]}`);
// // }

// // // 7. Iterating over String Indices
// // const str = 'hello';
// // console.log("\nIterating over String Indices:");
// // for (const index in str) {
// //     console.log(`${index}: ${str[index]}`);
// // }

// // // 8. Iterating over Set Properties
// // const set = new Set(['a', 'b', 'c']);
// // console.log("\nIterating over Set Properties:");
// // for (const key in set) {
// //     console.log(key); // Output: No output, Set has no enumerable properties
// // }

// // // 9. Iterating over Map Properties
// // const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// // console.log("\nIterating over Map Properties:");
// // for (const key in map) {
// //     console.log(key); // Output: No output, Map has no enumerable properties
// // }

// // // 10. Iterating over Custom Objects
// // const customObject = {
// //     property1: 'value1',
// //     property2: 'value2',
// //     method() {
// //         console.log('Method called');
// //     }
// // };
// // console.log("\nIterating over Custom Objects:");
// // for (const key in customObject) {
// //     console.log(`${key}: ${customObject[key]}`);
// // }



