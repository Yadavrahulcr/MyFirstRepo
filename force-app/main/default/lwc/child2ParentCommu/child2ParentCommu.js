import { LightningElement } from 'lwc';

export default class Child2ParentCommu extends LightningElement {
    msg
    showup = false
    handleClick(){
    this.showup=true
  }
  closeclick(event){
    this.msg = event.detail.msg
    this.showup=false
  }
}