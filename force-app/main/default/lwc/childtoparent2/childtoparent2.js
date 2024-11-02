import { LightningElement ,track} from 'lwc';

export default class Childtoparent2 extends LightningElement {
        //  child to parent using simple event 

    // parenthandle(){
    //     console.log('the call of the child has been recieved')
    // }



    // child to parent with data 
     recievedQue
     recievedAns
     msgFromchild 
     parenthandle(event){
     this.msgFromchild=event.detail
    //  console.log(this.msgFromchild)
    this.recievedQue=this.msgFromchild.que
    this.recievedAns=this.msgFromchild.ans
    }


    
}