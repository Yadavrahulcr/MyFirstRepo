import { LightningElement } from 'lwc';

export default class Chld2parentcommchildcompo extends LightningElement {
    
    inputtext

    onclickhanler(){
        this.inputtext=this.refs.input.value
        console.log(this.inputtext);
        //HOW TO CREATE AND DISPATCH CUSTOM EVENT 
       const event = new CustomEvent('searchtext',{
        detail:{searchtext:this.inputtext}
       });
       this.dispatchEvent(event)
    }

}