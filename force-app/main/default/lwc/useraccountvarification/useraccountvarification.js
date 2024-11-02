import { LightningElement, track } from 'lwc';

export default class Useraccountvarifivation extends LightningElement {
    @track username = '';
    @track password = '';
    @track repass = '';
    @track promptText = '';
    @track textColorClass = '';
    

    Usernamehandler(event) {
        this.username = event.target.value;
    }

    passInput(event) {
        this.password = event.target.value;
    }

    rePassEnt(event) {
        this.repass = event.target.value;
    }

    handleRegistration() {
        if (this.validatePassword()) {
            
            
        
        }
    }

    validatePassword() {
        if (this.password.length < 8) 
        {
            this.promptText = 'Password must be at least 8 characters long.';
            this.textColorClass = ' slds-text-color_error '
            return false
        } 
        else if (this.password !== this.repass) {
            this.promptText = 'Passwords do not match.'
            this.textColorClass = 'slds-text-color_error'
            return false;
        } else {
            this.promptText = 'The account has been registerd sucessfully !!!!!';
            this.textColorClass = 'slds-text-color_success';
            return true;
        }
    }
}