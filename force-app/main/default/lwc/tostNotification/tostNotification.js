import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class TostNotification extends LightningElement {
    toasthandler(){
       const event = new ShowToastEvent({
            title: 'Successaaaa',
            message:'acount created ',
            variant:'success'
        })
        this.dispatchEvent(event)
    }
}