import { LightningElement, track } from 'lwc';

export default class Uerverification extends LightningElement {
    @track username = '';
    @track password = '';
    @track repass = '';
    @track passwordStrengthMessage = '';
    @track passwordStrengthClass = 'slds-hide';
    @track promptText
    @track textColorClass
    passmatch = false

    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
        this.validatePasswordStrength();
    }

    handleConfirmPasswordChange(event) {
        this.repass = event.target.value;
        
    }

    handleRegistration() {
               this.passmatch = true
        if (this.validatePassword()) {
        }
        
    }

    validatePasswordStrength() {
        // Simple password strength validation using regular expressions
        const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const isStrongPassword = strongPasswordRegex.test(this.password);

        if (isStrongPassword) {
            this.passwordStrengthMessage = 'Strong password!';
            this.passwordStrengthClass = 'slds-text-color_success';
        } else {
            this.passwordStrengthMessage = 'Password must be at least 8 characters, include a letter, a number, and a special character.';
            this.passwordStrengthClass = 'slds-text-color_error';
        }
    }
    validatePassword() {
        
        
        if (this.password !== this.repass) {
          this.promptText = 'Passwords do not match !!!!.'
          this.textColorClass = 'slds-text-color_error'
          return false
      } else {
          this.promptText = 'The account has been registerd sucessfully !!!!!'
          this.textColorClass = 'slds-text-color_success'
          return true
      }
  }
}