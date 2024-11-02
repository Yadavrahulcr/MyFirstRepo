import { LightningElement ,wire} from 'lwc';
import{publish ,MessageContext} from 'lightning/messageService'
import MYMSGCHNL from '@salesforce/messageChannel/lmsmsch__c'
export default class Lmssender extends LightningElement {
    
    @wire(MessageContext)
    messagecontext

    sendmessage(){
          const message = {content:{
                name:'rahul',
                profession : 'salesforce developer'
             }}
            publish(this.messagecontext,MYMSGCHNL,message)
    }
}