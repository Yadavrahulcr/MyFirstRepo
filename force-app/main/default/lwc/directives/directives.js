import { LightningElement } from 'lwc';

export default class Directives extends LightningElement {

isvivible = false 


password 

handleClick(){
 this.isvivible=true 

}

handleInputChange(event){
    this.password = event .target.value

}

get handleClicks(){ 
  return  this.password === 'mahadevvv'


}

handalechenges(event){
    this.password = event.target.value
}

 get matcahchek(){
return this.password === 'mahadev'   

}


// the above functiolit could be acchived wit a button we will come back to this file after completing the quizz app








}