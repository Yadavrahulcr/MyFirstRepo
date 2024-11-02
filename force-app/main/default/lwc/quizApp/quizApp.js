import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

selected ={}    // a property to store a value its a function it will store more then 1 value 

correctans = 0
 issubmitted = false

myQuiz=[
        {
          id:'ques.1',
          ques: "what is the best quality of you ?",
          ans:{
           a :  "looks",
           b : "self believe",
            c : "love"

        },

        correctAnswere : 'b'
     },
    {
        id:'ques.2',
        ques: "what is the best endvarours of you ?",
        ans:{
         a :  "looks",
         b : "you are blessed ",
         c : "i am a restless soule "

        },

        correctAnswere : 'c'
    },
    {
        id:'ques.3',
        ques: "what is your worst trait ?",
        ans:{
         a :  "anger",
         b : "self punisher ",
         c : "over thinker "

        },

        correctAnswere : 'c'
    }
 ]   


 get allNotSelected(){

    return !(Object.keys(this.selected).length === this.myQuiz.length)
}
 changehandler(event){
 // console.log('name',event.target.name )
  // console.log('answer',event.target.value)
  // lets use object destructing to store the valurs with same name
  const{ name,value}= event.target 
  // const name = event .target.name
  //same for value 

  // to store the value in selected()

   this.selected = {...this.selected,[name]:value}
   // this.selected={"ques1":"a"}
}

submitHandler(event){
    event.preventDefault()
   let correct =  this.myQuiz.filter(item=>this.selected [item.id] === item.correctAnswere)
     this.correctans=correct.length
     
     this.issubmitted =true


      }
 
     resetHandler(){
     this.selected ={}
     this.correctans = 0
     this.issubmitted = false
     
     }



}