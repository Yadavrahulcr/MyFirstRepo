import { LightningElement } from 'lwc';

export default class Outerparentcomp extends LightningElement {
    valuetochildscomp='this value is sent to childs js';
    value=2
    showmultiplecomposition = false;


    //  getter method becuse youcant perform computational operation in the html 
    get updatedvalue(){
        return this.value*2
    }

    handleclick(){
        this.refs.compB.message = 'this is the msg from parent '
        this.template.querySelector('c-innerchildcomp').msgfromtemplateofparent='this msg is comming from the template method '
        this.refs.compB.name();
    }

}