import { LightningElement } from 'lwc';
//import {NavigationMixin} from 'lightning/navigation'
import{NavigationMixin} from 'lightning/navigation'
export default class NavigationComp1 extends NavigationMixin(LightningElement) {

    navigateTocahatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
            pageName:'chatter'
            }


        })
        
    }


    navigatetohomepage(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }
 


}