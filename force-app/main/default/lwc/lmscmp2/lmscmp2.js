import { LightningElement,wire } from 'lwc';
import msgService from '@salesforce/messageChannel/bholenath__c';
import { publish,subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext } from 'lightning/messageService';

export default class Lmscmp2 extends LightningElement {

        recievedMsg 
        subscribtion
        @wire(MessageContext)
         messageContext

         connectedCallback(){
            this.subscribtion =subscribe(this.messageContext,msgService,(message)=>{this.handlemsg(message)},{scope:APPLICATION_SCOPE})
         }

         handlemsg(message){
            this.recievedMsg=message.field1.data?message.field1.data:'no data recieved';
         }

}