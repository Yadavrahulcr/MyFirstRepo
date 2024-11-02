import { LightningElement ,wire} from 'lwc';
import { publish, MessageContext,APPLICATION_SCOPE } from 'lightning/messageService'
import c1c2messageChannel from '@salesforce/messageChannel/c1c2messageChannel__c'
import MYCHANNEL   from '@salesforce/messageChannel/rahullms__c'
export default class Lmsc1 extends LightningElement {
    @wire(MessageContext)
      messagecontext
    valueFromInput

   inputHandler(event){
       this.valueFromInput = event.target.value
   }
   
   clickHandler(){
        let payload = {lms:this.valueFromInput}
        publish(this.messagecontext,MYCHANNEL,payload,{scope:APPLICATION_SCOPE})
        console.log(payload)
   }
       
   }