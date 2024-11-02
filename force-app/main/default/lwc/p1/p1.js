import { LightningElement , track} from 'lwc';

export default class P1 extends LightningElement {
    Staus = "";
    @track childData
    clickhandler(){
        this.Staus='ihave been done with this shit ';

    }
   traits= [
        {
            name : 'rahul',
            age: 32 

        }, 
        {
            name : 'manku',
            age: 3
            
        }
    ]


    handleChildMethodCall(event) {
        // Call the child method when the event is received
        const childComponent = this.template.querySelector('c-c1');
        if (childComponent) {
            childComponent.handleChildMethod();
        }

 

     
    }
   
    childdata(event){
       // const childdata = this.template.querySelector('c-c1')
       this.childData =event.detail
            console.log(this.detail)
        }
    }