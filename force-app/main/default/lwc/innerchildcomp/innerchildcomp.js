import { LightningElement,api} from 'lwc';

export default class Innerchildcomp extends LightningElement {
    // here the names of the component  is as per there prestent in the dom structure 
    // here we have decleard the value with @ api to make this property available within the compositon part and it is available childs html by default 
    @api childsVariable
    @api className
    @api message
    @api recieveValueFromParentJs
    @api msgfromtemplateofparent
    get alertClassName() 
    {
        return this.className ? 'alert ' + this.className : 'alert'
    }
       
    @api name(){
        console.log('rahul');
    }



}