// array methods

//  arr.reduce methods 


     // it is used for following 
     // --> to calculte sum of the the given array 
     // return -> simplified object obect 


     // reduce method to caluculate the sum 

    numArry = [1,2,5,6]
    
    const sumofarray = numArry.reduce((accu,item)=>{
       return  accu=accu+item;          // remember if you had started a scope you have to a use a return statement
    },0)
    console.log(sumofarray);// 14


     arrayofobj = [
        {name:"rahul",earning:2300,expense:2000},
        {name:'amit',earning:2300,expense:1000},
        {name:'mehul',earning:3000,expense:1300}

     ]

     // now we can use reduce loop to caluate the sum of the earning or expense

     const expense = arrayofobj.reduce((accu,element)=>{
        return accu+=element.earning
     },0)
     console.log(expense);// 7600

     // we can use the reduce loop to get the simpilied object 
     const obj = arrayofobj.reduce((accu,element)=>{
         accu[element.name]=element.expense
         return accu

     },{})
        console.log(obj);  //{rahul: 2000, amit: 1000, mehul: 1300}
             // its kind of pusing each value in the loop to the empty object 


    // we can also do catogorical calculation using reduce loop

     let catorgory =[
        {cat:'a', numofunit: 23, price: 499},
        {cat:'b', numofunit: 23, price: 399},
        {cat:'c', numofunit: 23, price: 599},
        {cat:'a', numofunit: 23, price: 499},
        {cat:'b', numofunit: 33, price: 399}
    ]

    // here we wish to get the catogorical net amount of each type 
     
    const catWiseTotal = catorgory.reduce((accu,element)=>{
        if(accu[element.cat]){
            accu[element.cat]+=(element.numofunit*element.price);
        }
        else{
        accu[element.cat]=(element.numofunit*element.price);
        }
        return  accu

    },{})

      console.log(catWiseTotal)





      ////////////////////////////////////////////////////////////////////////////////


      // object methods

      // // Objects in JavaScript are collections of key/value pairs.
// // The values can consist of properties and methods, and may contain
// // all other JavaScript data types, such as strings, numbers, and Booleans.

// Object.assign()

// Object.assign() is a method is used for copying the values of all enumerable own
// properties  from one or more source objects to a target object. it returns the target object

// syntax

// Object.assign(target,...sources)

ob1 = {a:1,b:2}
ob2= {b:9,c:10}

const resultofassign = Object.assign(ob1,ob2)
console.log(ob1)//  {a: 1, b: 9, c: 10}  works  like spread operator



//Object.keys and object.values
// it used to acckes the keys the value of keys 
// it will return array of keys 
//
nobject = {a:1,b:2,c:3}
console.log(Object.keys(nobject)) // ['a', 'b', 'c']  *it returns array of keys
console.log(Object.values(nobject)) // [1,2,3]  it return the arry of values


// lets see how to use Object.keys and Object.values

const employees = {
     	boss: 'Michael',
     	secretary: 'Pam',
     	sales: 'Jim',
     	accountant: 'Oscar'
     };

     console.log(Object.keys(employees))
      
     // we can also iterate over using for loop 
     
     Object.keys(employees).forEach((element,index)=>{
          console.log( element+':'+employees[element])
          
     })
      console.log(Object.values(employees))




     //Object.enteries
     // Object.entries() creates a nested array of the key/value pairs of an object.
     // remember it creates array from object

     const operatingSystem = {
           name: 'Ubuntu',
           version: 18.04,
           license: 'Open Source'
        };
        const entries = Object.entries(operatingSystem)
        console.log(entries)  // output 
        //[
            // //     ["name", "Ubuntu"]
            // //     ["version", 18.04]
            // //     ["license", "Open Source"]
            // // ]
    
           // note that it returns nested array of key,value  pair

           // lets see how to use this 

           entries.forEach(([key,value])=>{
              console.log(key)
              console.log(value)
           })


           /// Array methods

           // 1.array.push 
           const arr = [];
           console.log(arr)
           arr.push(1,2,'rahul')
           console.log (arr)
           
           // similarly we can use it with arry of object

           const narry = [];
           narry.push ({name:'amit', age: '33', profession: 'engineer'})  // use paranthesis to insure a correctly push
           console.log(narry)
           narry.push ('amit');
           console.log(JSON.stringify(narry,null,3))

           // note that we use small parenthesis to pust the things in arry

           // lets try to access name property 
           testar = [
            {
            name: 'Ubuntu',
            version: 18.04,
            license: 'Open Source',
             id :1,
             reletedRec: {id:1, name :'rahul'}

            },
            {
                name: 'Ubuntu',
                version: 18.04,
                license: 'Open Source',
                 id :2,
                 reletedRec: {id:2, name :'rahul yadav'}
    
                }
        ]

          testar.forEach((element,index)=>{
            
            let presentId= element.id;
            console.log(presentId)
              console.log(element.reletedRec.name) // we can directly access the name form this
              console.log(Object.keys(element))
              console.log(Object.values(element))
          })
      
          let array = [1, 2, 3];
          let removedElement = array.pop()
           console.log(removedElement); // Output: 3
           console.log(array)  // remove from last
    
    
 // // The shift() method in JavaScript is used to remove the first element from 
// // an array and returns that removed element. 
// // This method changes the length of the array.

 let array1 = [1, 2, 3];
 let removedElement1 = array1.shift();

console.log(removedElement1); // Output: 1
console.log(array1); // Output: [2, 3]    // removw from beguning 



/// important method splice 

/// syntax
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// arr.splice (index,number of items to delete(if you dont any number all element will be removed after the index given as 1st parameter ), elemets to add)

let num = [1,2,5,9]
num.splice(2)  // first is index second number of elments to remove , and then after you can pust the elments in it 
console.log(num)
// if you dont give any index 
let num2= [1,2,22,2222]
num2.splice()
console.log(num2)  // creates a copy of array
  // it returns removed element and  and modifies the exiting array
// if you dont pass any thing in second parameter everything will be deleted after that index

num2.splice(1,0,6,8)
console.log(num2)// [1, 6, 8, 2, 22, 2222]
num2.splice(1,1,100,300) //remove 1 strating from index 1 and add 100,300  starting form  index 1 
console.log(num2)

// arry .slice 
//syntex  arr.slice([start], [end])

let newarr1= [22,33,334,2334,1,222,3,45,23,445,124,2445]
let art=newarr1.slice(1,4) // 
 console.log(art) // [33, 334, 2334] here index one is included  and last index is also included
 console.log(newarr1.slice())// returns copy of arry generly used to make copy of index
 
console.log(newarr1)


/// general used case 

let arr1 = [
    {id:23,name:'rahul', points:100},
    {id:222,name:'rahul1', points:1000},
    {id:23223,name:'rahul2', points:10}
]

let arry2 =[
    {id:222,value:44},
    {id:23,value:2224}
    
]
// task is to merge these to array  with 3rd property as  value which  and corresponding arry value;

const mergedarry = arr1.map((item,index)=>{
  
   let ci = arry2.find((element)=>element.id===item.id)
   return {...item,...ci}
    

})
console.log(JSON.stringify(mergedarry,null,3))

// output
//  [
//    {
//     "id": 23,
//     "name": "rahul",
//     "points": 100,
//     "value": 2224
//  },
//  {
//     "id": 222,
//     "name": "rahul1",
//     "points": 1000,
//     "value": 44
//  },
//  {
//     "id": 23223,
//     "name": "rahul2",
//     "points": 10
//  }
// ]


// // Searching in array



// // Now let’s cover methods that search in an array.

// // indexOf/lastIndexOf and includes
// // The methods arr.indexOf and arr.includes 
//have the similar syntax and do essentially the same as their string counterparts,
// but operate on items instead of characters:

// // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// // arr.includes(item, from) – looks for item starting from index from, returns true if found.
// // Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

let nnarr= [1,4,44,55,666,123]
//  console.log(nnarr.indexOf(item,from))



console.log('tt')
