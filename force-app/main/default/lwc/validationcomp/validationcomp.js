import { LightningElement } from 'lwc';

export default class Validationcomp extends LightningElement {



    clickHandler() {
        this.setValidation('.date', 'Date field is required');
        this.setValidation('.name', 'Name field is required');
    }
    
    setValidation(selector, message) {
        let inputField = this.template.querySelector(selector);
        let value = inputField.value.trim(); // Trimmed value to avoid spaces being considered as valid
        
        if (!value) {
            inputField.setCustomValidity(message);
        } else {
            inputField.setCustomValidity('');
        }
        
        inputField.reportValidity();
    }
    
    // Assuming you want to validate using references (not a typical pattern, but adapting to your example)
    validationCheck(refsName, message) {
        console.log('Validation function called for ' + refsName);
        
        // Assuming this.refs is an object containing references to your input fields
        let inputField = this.refs[refsName];
        let value = inputField.value.trim();
        
        if (!value) {
            inputField.setCustomValidity(message);
        } else {
            inputField.setCustomValidity('');
        }
        
        inputField.reportValidity();
    }

}