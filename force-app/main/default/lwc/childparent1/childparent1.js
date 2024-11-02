import { LightningElement } from 'lwc';

export default class Childparent1 extends LightningElement {
     //c/conditionalRenderingchild to parent with simple event 
    
    // parentcall(){
    //     const event = new CustomEvent('callparent')
    //     this.dispatchEvent(event)
    // }


    parentcall(){
        const eventdata={
            que:'hows the josh?',
            ans: 'high sirji'
        }
        const event = new CustomEvent('callparentt',{detail:eventdata})
        this.dispatchEvent(event)
    }  

}