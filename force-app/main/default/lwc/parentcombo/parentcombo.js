import { LightningElement ,track} from 'lwc';

export default class Parentcombo extends LightningElement {
  

    @track selectedValues = '';

    handleSelectionChange(event) {
        const selectedOptions = event.detail;
        this.selectedValues = selectedOptions.map(option => option.label).join(', ');
    }

    
}