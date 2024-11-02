import { LightningElement ,wire} from 'lwc';
import {subscribe,MessageContext } from 'lightning/messageService';
import MYMSGCHNL from '@salesforce/messageChannel/lmsmsch__c'

export default class Lmsreciever extends LightningElement {
 @wire(MessageContext)
 context
 Message1
 Message2
 handleMessage(message){
this.Message1=message.content.name
this.Message2=message.content.profession

 }
connectedCallback(){
    subscribe(this.context,MYMSGCHNL,(message)=>{this.handleMessage(message)})
    console.log(message)
}}