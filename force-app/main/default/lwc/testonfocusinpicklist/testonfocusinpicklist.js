import { LightningElement } from 'lwc';

export default class Testonfocusinpicklist extends LightningElement {
   value = 'inProgress'; 
    showinput1=false;
    inputtext;

     options= 
         [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
            { label: 'Finished1', value: 'finished1' },
            { label: 'Finished11', value: 'finished11' },
            { label: 'Finished111', value: 'finished111' },
        ]
    

    handleChange(event) {
        this.value = event.detail.value;
        console.log(event)
    }
    showinput(){
        console.log('action');
        this.showinput1=true;
        

    }

    changehandler(event){
        this.inputtext=event.target.value
        options = this.options.filter((item)=>item.label.includes(this.inputtext))
    }
       
    hideinput(event){
        event.preventdefault();
    }

}