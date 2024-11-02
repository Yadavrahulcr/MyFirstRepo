import { LightningElement,wire } from 'lwc';
import msgService from '@salesforce/messageChannel/bholenath__c';
import { publish,subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext } from 'lightning/messageService';


export default class Lmscmp1 extends LightningElement {

    msgfromc1

    @wire(MessageContext)
     messageContext

     inputchange(event){
        this.msgfromc1=event.target.value
     }


     handleClick1(event){

        const message={
            field1:{
                data:this.msgfromc1
            }
        }


        publish(this.messageContext, msgService, message);
     }
}