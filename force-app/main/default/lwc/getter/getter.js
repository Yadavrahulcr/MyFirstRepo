import { LightningElement, track } from 'lwc';

export default class Getter extends LightningElement {
// lets understand various aspects of getter 

sibblings = ['ruchi','ashish', 'rahul']
// since we cant show this data {sibblings[0]} within the html 
// we have to call this within a function with g get property 

 get  issib(){
        return this.sibblings[0];
 }

 // similarly  trying a different type of the computional operation

 num111=20 
 num2=1
 
 numhandler(event)
 {
   this.num2 = event.target.value
 } 
 get  sum()
   {
    return this.num111 + this.num2
   }
 
 // this is not working as expected with the input fied works well  for the first 
 // time but it creats trouble when we are updatating the value from 
 // html 
 
 // use it with set method when required 
 
 //
 





}