import { LightningElement } from 'lwc';

export default class Parenttochild1 extends LightningElement {
    name ='Manku';
     datatopassonbuttonclick 
    properties=[
        {name:"manku yadav",
         age:3
        },
        {name:"rahul yadav",
         age:33
        }
    ]

    clickhandler(){
     this.datatopassonbuttonclick = "hi i am the data from the child"
    }
      
    childmethodcallingmethod(){
        const childmtd = this.template.querySelector('c-parentchild2')
       if(childmtd){
        childmtd.childmethod();
       }
    } 

}