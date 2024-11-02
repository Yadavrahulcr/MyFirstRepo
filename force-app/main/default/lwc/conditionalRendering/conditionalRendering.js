import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showdataa = false 
      data = 'helo we are dealing with lwc:if directive'
    showdata(){
      this.showdataa = true
    }

    hidedata(){
        this.showdataa=false
    }
}