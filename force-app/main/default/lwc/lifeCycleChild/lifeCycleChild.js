import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('child constuctor called')
    }
    connectedCallback(){
        console.log('child connectedCallback called')
    }
    renderedCallback(){
        console.log('child renderedCallback method called ');
    }
    disconnectedCallback(){
        alert('child disconnected call back called  !!! ')
    }
}