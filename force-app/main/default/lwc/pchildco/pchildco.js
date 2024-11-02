import { LightningElement,api } from 'lwc';

export default class Pchildco extends LightningElement {
    @api message  // by adding @ api we are making the property public means both child and parent can access this property 
                  // this is always made public from child 
    @api num
    @api cardHeading 
}