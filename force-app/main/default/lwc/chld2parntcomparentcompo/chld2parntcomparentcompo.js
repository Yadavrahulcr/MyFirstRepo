import { LightningElement } from 'lwc';

export default class Chld2parntcomparentcompo extends LightningElement {
    handleonsearch(event){
        console.log('method called')
        console.log(event.detail.searchtext);
        console.log(JSON.stringify(event.detail));
    }
}