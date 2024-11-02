import { LightningElement } from 'lwc';

export default class Mseletpicklist extends LightningElement {
  // this component was created to just test some functionality 

    option=[
        {label:'ind1', value:1},
        {label:'ind2', value:2},
         {label:'ind3', value:3},
         {label:'ind4', value:4}
    ]
      testArray=[1,2,3,4]
    handleClick(){

        this.template.querySelector('[role="cm-picklist"]').setOptions(this.options);
        this.testArray.push(5)
       
       console.log(this.testArray);
 
    }

    connectedCallback(){
        this.testArray.push(66);
        
            this.testArray.forEach((item)=>{
                this.option.push({label:'ind4',value: item})
            })
       
            console.log(this.option);
        
        console.log(this.testArray);
    }



}