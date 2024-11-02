import { LightningElement ,wire} from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService'
import c1c2messageChannel from '@salesforce/messageChannel/c1c2messageChannel__c'
export default class Lmsc2 extends LightningElement {
incomingValue='';
subs=null;
@wire(MessageContext)
messagecontext

incommingMessageHandler(message){
this.incomingValue=message.valueFromInputFromC1
}
connectedCallback(){
    subscribe(this.messagecontext,c1c2messageChannel,(message)=>this.incommingMessageHandler(message))
}

}