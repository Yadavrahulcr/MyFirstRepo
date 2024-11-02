import { LightningElement ,wire} from 'lwc';
import MSGHUB from "@salesforce/messageChannel/SampleMessageChannel__c"
import {subscribe,MessageContext,APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context
    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
       this.subscription= subscribe(this.context,MSGHUB,(message)=>{this.msghandle(message)},{scope:APPLICATION_SCOPE})
    }
    msghandle(message){
        this.recievedMessage=message.lmsData.value? message.lmsData.value: 'NO MESSAGE'
    }  
    unsubscribeM(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
}