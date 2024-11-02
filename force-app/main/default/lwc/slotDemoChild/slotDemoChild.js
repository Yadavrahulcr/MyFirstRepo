import { LightningElement } from 'lwc';

export default class SlotDemoChild extends LightningElement {

    footerchange(){
        const footerElement1 = this.template.querySelector('.slds-card__footer')
        if(footerElement1){
            footerElement1.classList.remove("slds-hide")
        }

    }
}