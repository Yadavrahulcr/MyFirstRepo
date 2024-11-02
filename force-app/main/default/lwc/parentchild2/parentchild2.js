import { LightningElement,api,track } from 'lwc';

export default class Parentchild2 extends LightningElement {
    @api nameofyourson
    @api human
    @api recievedataonclick
     
    @api childmethod(){
    //    const data ='i am super man'
    console.log('Child method called');
     }
   // this.dispatchEvent(new CustomEvent('childmethod'))
    connectedCallback(){
      const event = new CustomEvent('childmethodcall')
       this.dispatchEvent(event)
    }
}