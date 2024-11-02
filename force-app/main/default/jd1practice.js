console.log('is it working?? and yes')

// Jd 1  set 1 
// the objective is to grasp the concepts not just rush through the sets 

// Q1 

const exec = (item,delay)=> 
new promise (resolve=> setTimeout(()=>resolve(item),delay));

async function  runparallel (){
    const [result1, result2,result3]= await pormise.all(
       [exec('x','100'),exec('y','500'), exec('z','1000')]
    );
    return `parallel is done : ${result1}${result2}${result3}`
}

/* key consepts covered 
1.promise
2.async / await 
3.settime out 

Promise
=======
syntex (
let mypromise = new promise(function(resolve, reject){

    resolve() when successfull
    reject () // error 

})

mypromise.then(
    function(value)// when code is successful 
    function (error )// when code is unsucessful 
)
// to get the value of resolve and reject we have to add .then and .catch  , .then get us the value 
// the value of .resove and  reject  

Promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

The Promise.all() method is one of the promise concurrency methods.
 It can be useful for aggregating the results of multiple promises. 
 It is typically used when there are multiple related asynchronous tasks that the overall code relies on to work successfully —
 all of whom we want to fulfill before the code execution continues.

*/
