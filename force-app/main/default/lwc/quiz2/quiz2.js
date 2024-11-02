import { LightningElement } from 'lwc';

export default class Quiz2 extends LightningElement {
    newTest=[
 
        {  
            id:"QUESTION .1 ",
            QUESTION : 'who is blessed by the god ?',
            Answer:{
                a : 'Man',
                b : 'Dog' ,
                c : 'bird'
             },
             Sahijaeab : "a" 
    
         },
    
         {  
            id:"QUESTION .2",
            QUESTION : 'who is blessed by the humans ?',
            Answer:{
                a : 'babies',
                b : 'donkeys' ,
                c : 'monkey'
             },
             Sahijaeab : "c" 
    
         },
         {  
            id:"QUESTION .3" ,
             QUESTION : 'who is blessed by the godess ?',
            Answer:{
                a : 'women',
                b : "girl child" ,
                c : "bless by all"
             },
             Sahijaeab : "c" 
    
         }
    
    ]

    selected={}

    get markbasedcolorchange(){
        return `slds-text-heading_medium ${this.newTest.length === this.correctAns ? "slds-text-color_success" :"slds-text-color_error" }`

       }
    
     get comments (){
       return `${this.correctAns>2? "you are a great performer " : 'you need recheak our concecepts'}`

     }
     

    correctAns=0
    // we wish to make the out result propmp to be visible only when the the submit dutton is tapped 
    issubmitted = false

    changehandler(event){

        const{name,value} = event.target // object destucturing
        this.selected ={...this.selected,[name]:value}       // array because it is going to recive more then 1 value 
       // console.log('name',event.target.name )
       // console.log('answer',event.target.value)
   }
   get allnotselected(){
       return !(Object.keys(this.selected).length === this.newTest.length)  // we are expecting that selected{} will achieve input in the form of object  and we are using object method to count no of keys 

    }
    submithandaler(event){
        event.preventDefault() // this will stop the form to refresh when option is clicked 
       let correct = this.newTest.filter(item=>this.selected[item.id]===item.Sahijaeab) //  => arrow function read this tommorow   https://www.warambil.com/javascript-arrays-and-arrow-functions
        this.correctAns = correct.length
        this.issubmitted = true

    }
    resethandaler  (){
        this.selected={}
        this.Sahijaeab=0
        this . issubmitted = false 
        

    }
    
    

}