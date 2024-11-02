import { LightningElement } from 'lwc';

export default class Cmp11 extends LightningElement {

    hitchildmethod(event){
        const cm = this.template.querySelector('c-cmp12')
        cm.childmethod();
    }

    funcparent(event){
        console.log('funcparent called');
    }

    cheakformchild(event){
        console.log(JSON.stringify(event.detail));
    }

}