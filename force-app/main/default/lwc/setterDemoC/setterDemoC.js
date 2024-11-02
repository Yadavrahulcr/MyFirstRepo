import { LightningElement , api } from 'lwc';

export default class SetterDemoC extends LightningElement {
    // here we are interested in fetching data from parent component and mutate it 
    // 
    // @api details 

    // in order get details of parent component  and make it public property for child and parent  lets define detail as attribute in child embed element
      // we will rewrite  the above code  to  impliment getter and setter 


    //   userdetail
    //   @api 
      
    //  get details (){
    //     return this.userdetail
    //  }
     
    //  set details(data){
    //    this.userdetail=data
    //  }
       
    // the above code is good enough to fetch the details from the parent component 
    // but we wish to manupulate the data coming from parent component  we wish to multipy the value of age by 2 and also we wish add a property city 

     userdetail
     
      @api 
      
     get details (){
        return this.userdetail
     }
     
     set details(data){
       let newAGE= data.Age*2
       this.userdetail = {...data,Age:newAGE,"location": "india" }
    
     }
}