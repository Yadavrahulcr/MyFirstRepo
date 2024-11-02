import { LightningElement,api } from 'lwc';

export default class Cmp12 extends LightningElement {

    @api prop1 

    @api
    childmethod(){
        console.log('Child method called');
        
        //this.dispatchEvent(new CustomEvent('close'))
}

m(){
    this.dispatchEvent(new CustomEvent('notifyparent'))

   /* 
         syntex of dispatching event 

         this.dispatchEvent(new CustomEvent('eventName',{bubbles:false,composed:true,detail:{
}}))

         this.dispatchEvent('EventName',{bubbles:true,composed:false,details:{}})

   
   */

         this.dispatchEvent(new CustomEvent('cheak',{bubbles:true,composed:true,detail:{
             name:'surya',
             age:20
         }}))


}

    }