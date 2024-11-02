import { LightningElement } from 'lwc';

export default class Chtopcc extends LightningElement {
    handleOkay(){
        const myevent = new CustomEvent('close',
        {  bubbles:true,
           detail : "happy birthday manku"})
        this.dispatchEvent(myevent)
    }
    footerevent(){
        console.log('footer event called')
    }
}