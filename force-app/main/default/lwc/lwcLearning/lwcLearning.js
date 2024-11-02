import { LightningElement, track } from 'lwc';

export default class LwcLearning extends LightningElement {

  name ='rahul '

  god = 'mahadev'
  changeHandler(event){
    this.god =event.target.value

  }

  // to cheak track funtionality
  //  to make the @track avilable to use we have to  add track power from lwc 
  //  import {LightningElement , track } from 'lwc';


  // lets create an object 

//  @track car = {

//     finest : "jermanss",
//     okeyish : "american",
//     featureRich : 'korian'

//   }
//   // lets try to asign value to fineest progamaticlly and see if its value changes 

//   changehendler(event){
//     this.car.finest = event.target.value

 // }
 // trying the same with the spread operator 
  car = {

  finest : "jermanss",
  okeyish : "american",
  featureRich : 'korian'

}
// lets try to asign value to fineest progamaticlly and see if its value changes 

changehendler(event){
            this.car = {...this.car , 'finest' : event.target.value}
 
}



manku = ["smart",'intelligent', 'classy', 'thst he id a good human being ']

get manks(){
return this.manku[3]

}


num1 =10
num2 = 20
get sum (){

return this.num1 + this.num2 
}

}