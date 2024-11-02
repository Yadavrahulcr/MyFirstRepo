import { LightningElement,track } from 'lwc';

export default class Trackproperties extends LightningElement {
 // lets say we have an object 

 // here the expection is that as the data from the lightning field updates the one of elements of the object but since property is not an object it will not update 
 // hence we will have to take the help of the track property 

  @ track car= {
        hetcback:'swift',
        suv:'endavour',
        muv:'innova'
    }
    handler(event){
        this.car.suv =event.target.value
        
    }
    // we can active the same result with the spread operator also . and this is sometime considerd as the more relible method as it produces the shalow copy of the object and array

    car1= {
        hetcback:'swift',
        suv:'endavour',
        muv:'innova'
    }
    handler1(event){
    this.car1 = {...this.car1,"muv":event.target.value} 
        
    }

    num1 = 5
    num3 = 4 

     get sumofnumber(){
        return this.num1 + this.num3
    }
}