import { LightningElement } from 'lwc';
import pubshub from'c/pubshub'
export default class Pubsubb extends LightningElement {
    message
    connectedCallback(){
        this.callsubscriber()
    }

    callsubscriber(){
     pubshub.subscribe('componentA',(commingmessage)=>{
        this.message=commingmessage
        console.log(this.message)
        console.log(this.commingmessage)
        
     })   
    }

}