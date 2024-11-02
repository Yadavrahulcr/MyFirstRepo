import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToNavItem extends NavigationMixin (LightningElement) {

    navigateToSOMETAB(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',

            attributes:{
                apiName:'IMDB'
            }
        })
    }

    navigateToRelatedObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'001Ie0000030RyDIAU',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
                
            }
    })



    }

    navigateToexternalPage(){

        this[NavigationMixin.Navigate]({
            'type':'standard__webPage',
            'attributes':{
               // pageReference:{
                    'url':'https://www.google.com',
                   //  openInNewTab:true
               // }
            }
        })
    }
}