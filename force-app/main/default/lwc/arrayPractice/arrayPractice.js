import { LightningElement,wire } from 'lwc';
import getacc from'@salesforce/apex/arrayclass.getacc'

export default class SimpleArrayExample extends LightningElement {
    transformedArray = [];
    wiredData=[]

   @wire(getacc)
   accdata({data,error}){
    if(data){
        //console.log(data)
        this.wiredData=data
        console.log('ttttt'+JSON.stringify(this.wiredData,null,3))
      this.transformData()
    
      
    }
   }

   
   newArray=[]
    transformData() {
      
       //  now we have the data 
       // now for each loop can only iterate and do the stuff nut it will never change the array and also it doesnt return any thing 
      // we can create new array with relevant field with the help help of for each  loop 
       // for example 
        this.wiredData.forEach((element,index)=> {
            console.log(element.Name)
            let naame= element.Name
            // this loop will not return anything but you want to update a value you can use it 
            // say for example we wish to multiply annual revanue by 2 
            // that we do and also can store it in new array 
            let ar=element.AnnualRevenue * 50
            // console.log(ar)
            this.newArray.push({newname:naame,rev:ar});
            

            /// will continue

         });
          console.log('new array', JSON.stringify(this.newArray,null,3))

          this.wiredData.forEach(({Name,AnnualRevenue})=> {
            console.log(Name)
            let naame= Name
            // this loop will not return anything but you want to update a value you can use it 
            // say for example we wish to multiply annual revanue by 2 
            // that we do and also can store it in new array 
            let ar=AnnualRevenue * 50
            // console.log(ar)
            this.newArray.push({newname:naame,rev:ar});
            

            /// will continue

         });
          console.log('new array', JSON.stringify(this.newArray,null,3))
          
       

    }


}