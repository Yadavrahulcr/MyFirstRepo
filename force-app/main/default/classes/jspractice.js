function acc( ) {
  console.log('oyee nano paii')
}
acc()


// array methods 

// there are many arry methods 

//1.  map method

let random = [2,3,5 ,6 ]

// map method always return somthing ..
// map method is used to transform the data 

// syntax
// <arry name >.< method >( function(current value,index, actual array ) {

//})

let maparray =  random.map(function(ci,index,array){
             console.log( ci,index,array)
             return 3*ci
})  // please note that that 

console.log(random)
console.log(maparray)


// other example of map 

let arr = [3,5,77,88]
// lets apply a map to add 2 to each item and multuiply by 7 to each value of the array 

let newarr = arr.map(function(item,index,array){
    return (item+2)*2
})
console.log(newarr)

console.log('---------------------------------------------------------');

// array.filter()  // filter()
 
// filter method is used to return new based on the condition of satisfied values 


let aar=[4,55, 63,90];

let fillteredValue =aar.filter(function(item,index,array){
    return item>40;
})
console.log(fillteredValue)

console.log('---------------------------------------------------------------------');

// sort 

let arr1 = [ 'ravi', 'amit']
 
console.log(arr1.sort());

let num1 = [1,66,8 ,9]
let sortedv = num1.sort(function(a,b){ return b-a})

console.log (sortedv)
let sortedv1 = num1.sort(function(a,b){ return a-b})
console.log (sortedv1)
console.log (sortedv)

// reduce 

let arg = [30,34]

// syntax 
//<array name > <method.name>(function ( total , item,index,array){},initial value )
let sum = arg.reduce(function(total,item)
{
    return total+item
},0)
console.log(sum);

// for each ()

// for is simple loop but it doesnt retun any thing 
sum=0;
let arrrk =[40,50]
 let cheakeachloop =  arrrk.forEach(function(item)
 {
           // not returning any thing coz  we can perform certain action with each element 

        

        
 })
 console.log((cheakeachloop)) // wilnuml through an arror but coz 


 console.log('----------------------------------------------');


 console.log('arrow function ')

// lets make a simple function 

  function getcar(){
    console.log('rangerover')
}
getcar()

// to convert it into normal fuction 

garcar = ()=>{
    console.log('rangerover')
}
garcar()  // calling function to cheak the output
// both function gives same output

// the above function  can be altered in different way 
// we can remove curly braces if there is a single statement to process 

garcar1=()=>console.log('rangerover')  // as it has single statement to process 

garcar1()// cheaking output

// we can further transform it to 


// lets consider another function

function add (num){
   add = num+3
   return add
}

console.log(add(4));




// lets convert it to arrow function 

adding = (num)=>{
    add = num + 3
    return(add)
}
console.log(adding(4));

 addin =num1=> num1+3 // here all the bracess has been removed and also return has been removed becused return is 
                      // return is valid in curly braces

 console.log(addin(4))

 // lets try array method  with array function 

 let arrw = [4,6,3,55]

 // lets perform arrow function with arrow function 

 let doublevalueofArray = arrw.map((item)=>item*3)
 console.log(doublevalueofArray)

// arrow function binds the surrounding code context.

// lets consider the below object 

let obj= {
    name : 'Rahul',
    getName1:function()
    {
      console.log(this.name)
          function fulln(){
            console.log(`${this.name} yadav`)
      
          }
          fulln()    // it is not priting only yadav because its cant access name property
    }

}
obj.getName1()



// lets write this same function with same code with arrow function 

let obje ={
    name11 :'rahul',
    getnaam : ()=>{console.log(obje.name11) // we can not use arrow function coz it dosnt 
        // has the acess a property which is defined before the arrow function 
        const fullname= ()=>console.log(obje.name11 +' yadav')                       
       fullname()
    }

  
  
}

obje.getnaam()