import { LightningElement, wire } from 'lwc';
import MSGHUB from "@salesforce/messageChannel/SampleMessageChannel__c"
import {MessageContext,publish} from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {
    inputval
    @wire(MessageContext)
    context 
    inputhandler(event){
        this.inputval = event.target.value
    }
    publishMessage(){
       const message={lmsData:
        {value:this.inputval}
    }
      publish(this.context,MSGHUB,message)
   }

    
}