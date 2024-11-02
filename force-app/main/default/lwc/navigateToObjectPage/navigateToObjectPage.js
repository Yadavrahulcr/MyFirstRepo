import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

   //import {NavigationMixin} from 'lightning/navigation'
  import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToAccount(){
        

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes : {
                 //recordId : '001Ie0000030RyDIAU',
                objectApiName: 'account',                    // we can skip api name 
                 actionName : 'new'
            }
        })



        
    }

    navigateTofiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }


    navigateToNewRecordwithdefaultvalue() {
        // const defaultValue = encodeDefaultFieldValues({
        //     Name: 'Rahul Yadav from Navigation.Navigation'
        // });
        const defaultValue= encodeDefaultFieldValues({
            Name: 'Rahul Yadav from Navigation.Navigation'
        })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new',
            },
            state: {
                defaultFieldValues: defaultValue
            }
        });
    }
    
    navigateToList(){

        this[NavigationMixin.Navigate]({
           type:'standard__objectPage',
           attributes:{
           objectApiName:'account',
           actionName:'list'
           },
           filterName:'Recent'

        })

    }
   
    navigateToRelatedlist(){
        this[NavigationMixin.Navigate]({

            type: 'standard__recordPage',
            attributes:{
                 recordId:'001Ie0000030RyDIAU',
                 objectApiName:'account',
                 actionName:'related'
            }
        })
    }
        

   
}