import { LightningElement,api } from 'lwc';

export default class C1 extends LightningElement {
    @api status

    // lets assume there a complex deta sturctue
     @api human 

     @api handleChildMethod() {
        console.log('Child method called');
        // Add your logic here
    }
    connectedCallback(){
     
       // const event = new CustomEvent('childmethodcall');
       // this.dispatchEvent(event);  
        this.dispatchEvent(new CustomEvent('childmethodcall')) 
    }
    connectedCallback(){
        
        this.dispatchEvent(new CustomEvent('dataparent',{detail:'the data from child'}))
    }

}