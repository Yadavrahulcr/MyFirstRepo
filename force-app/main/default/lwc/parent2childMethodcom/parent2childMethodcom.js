import { LightningElement,api} from 'lwc';

export default class Parent2childMethodcom extends LightningElement {

val=20

changehandler(event){
    this.val =event.target.value

  }     

@api resethandle(){
      this.val = 50
      }
      
}