import { LightningElement } from 'lwc';
 
export default class DatabindingAnd2wayDatabinding extends LightningElement {
    name = 'rahul kumar yadav'  
    obj={
        age:30,
        sex:"male"
    }
            // this code is used for understanding two way data binding 

     name1 = 'rahul1 '
     jobDec = 'admin'
     handlechange(event){
        this.jobDec=event.target.value
     }

}