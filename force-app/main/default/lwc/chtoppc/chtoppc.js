import { LightningElement } from 'lwc';

export default class Chtoppc extends LightningElement {
    showmodal=false
    message
    showmodalh(){
        this.showmodal=true
    }
    clickhand(event){   
   this.message = event.detail
      this.showmodal=false
    console.log(this.message)
    }
     


}