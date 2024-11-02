import { LightningElement, track } from 'lwc';

export default class MultiSelectPicklist extends LightningElement {
    @track value = '';
    selectedVals = [];

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
            { label: 'Finished1', value: 'finished' },
            { label: 'Finished2', value: 'finished' },
            { label: 'Finished3', value: 'finished' },
        ];
    }

    handleChange(event) {
        const selectedOption = event.target.value;
        if (!this.selectedVals.includes(selectedOption)) {
            this.selectedVals.push(selectedOption);
        } else {
            this.selectedVals = this.selectedVals.filter(item => item !== selectedOption);
        }
        this.value = this.selectedVals.join(', ');
    }
}