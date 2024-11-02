import { LightningElement,track } from 'lwc';

export default class ParentsearchComponent extends LightningElement {
    @track selectedValue;
    @track picklistOptions = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        // Add more options as needed
    ];

    handlePicklistChange(event) {
        this.selectedValue = event.detail.value;
    }
}