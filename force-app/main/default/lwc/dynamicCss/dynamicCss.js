import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent = 10
    changehandler(event){
        this.percent = event.target.value
    }
    get percentage(){
        return`width:${this.percent}%`
    }
       get chngecolor() {    
        return this.percent<=30 && this.percent>0 ? "slds-notify slds-notify_alert slds-alert_error" 
        : this.percent<=50 && this.percent>30 ? "slds-notify slds-notify_alert slds-alert_warning slds-c-alert-color-background "
        :"slds-notify slds-notify_alert slds-alert_offline"
      }
    
    }