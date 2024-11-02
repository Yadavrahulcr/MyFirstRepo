import { LightningElement,api } from 'lwc';

export default class Chillddcomp extends LightningElement {

    @api name
    valuefrommethod
    @api detailsfromparent
    @api percentage 
    @api transproety

    @api childmethod(){

        console.log('child method called');
        console.log(this.name);
        this.valuefrommethod = 'hahahaha'
        console.log(JSON.stringify(this.detailsfromparent,null,2))
    }

     connectedCallback(){
        const event = new CustomEvent('cheakevent',{detail:{value:'value is from child'}})

        this.dispatchEvent(event)

        this.dispatchEvent(new CustomEvent('directevent',{detail:{value:'this value is from direct dispatch'}}))
     }

    }