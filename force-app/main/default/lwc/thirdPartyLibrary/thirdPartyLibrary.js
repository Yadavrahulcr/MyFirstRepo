import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/momentjs';
import{loadScript} from 'lightning/platformResourceLoader';
export default class ThirdPartyLibrary extends LightningElement {
    currentDate=""
    isloaded = false  

   
   
     renderedCallback(){       // we are using this function because we want any activty only after the page load 

        if(this.isloaded){
            return
         }         // we are defining this variable , coz we know that when renderedcallback lyf cylcle hook is called , the template is called again and again , so to avoid such things 

         else{
            Promise.all([
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                // success
              this.setdateonscreen()
            }).catch(error=>{
                console.error(error)
           })
           this.isloaded=true

         }
       
    }  
    setdateonscreen(){
       this.currentDate= moment().format('LLLL')
    }
}