import { LightningElement ,api} from 'lwc';

export default class Grandchild extends LightningElement {
    @api grandchildproperty

    connectedCallback(){
        this.dispatchEvent(new CustomEvent('gcevent',{detail:{value:'value from grand child'},bubbles:true,composed:true}))
    }
}