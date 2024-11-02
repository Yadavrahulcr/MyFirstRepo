import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    show = false
    constructor(){
        super()
        console.log('parent constuctor called')
    }
    connectedCallback(){
        console.log('parent connectedCallback called')
    }
    renderedCallback(){
        console.log('parent renderedCallback method called ');
    }
    handleclick(){
        this.show = !this.show 
    }
    
}