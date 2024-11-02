import { LightningElement } from 'lwc';

export default class UnderstandPromises extends LightningElement {
    
 connectedCallback(){
//this.understandPromises();
this.utilizepromise()

 }
    

understandPromises(){
   console.log('this function is called')
   //this.utilizepromise()
  
   return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{

        let success = true;
        if(success){
            resolve('any value that you wish to return on callback');// the value you but put in the resolve blok will come in the .then block

        }
        else{
           reject('you are seeing this value this value is comming from the recject block')  // the value you put in the error bock  the reject it come it error block

        }


    },100)

   })

// from this function we will call another function to utilize the promise



 }

 
 utilizepromise(){

    this.understandPromises().then((result)=>{
        console.log(result)
    }).catch((error)=>{
        consolel.error(error);
    })


 }


}