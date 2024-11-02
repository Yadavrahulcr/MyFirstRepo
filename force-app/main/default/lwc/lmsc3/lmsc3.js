import { LightningElement,wire } from 'lwc';
import MYCHANNEL   from '@salesforce/messageChannel/rahullms__c'
import { subscribe,MessageContext, APPLICATION_SCOPE } from 'lightning/messageService'
export default class Lmsc3 extends LightningElement {
    incomingValue='';
subs=null;
@wire(MessageContext)
messagecontext

incommingMessageHandler(message){
this.incomingValue=message.lms
console.log(message);
}
connectedCallback(){
    subscribe(this.messagecontext,MYCHANNEL,(message)=>{this.incommingMessageHandler(message)},{scope:APPLICATION_SCOPE})
}

}