import { LightningElement } from 'lwc';
 import pubshub from'c/pubshub'
export default class Pubsuba extends LightningElement {
      msg
    inputhandler(event)
    {
        this.msg = event.target.value
    }
    publishhandler(){
        pubshub.publish('componentA',this.msg)
        
          
    
        
    }

}