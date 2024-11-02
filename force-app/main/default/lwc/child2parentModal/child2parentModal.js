import { LightningElement } from 'lwc';

export default class Child2parentModal extends LightningElement {

    closehandler(){
        const myevent = new CustomEvent('close',{
            
            // detail:' the model has been sucessfully closed '

            // if object
            detail:
            {
              msg:' the model has been sucessfully closed3 '
            }
        })
        this.dispatchEvent(myevent)
        // thid code can be written in one line by the following way 
        // this.dispatchEvent(new CustomEvent('close')
    }

    
}