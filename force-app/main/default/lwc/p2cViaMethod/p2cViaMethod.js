import { LightningElement, api} from 'lwc';

export default class P2cViaMethod extends LightningElement {
   val=20

   valuee(event){
    this.val=event.target.value
   }

   @api reset(){
    this.val=50
   }

}