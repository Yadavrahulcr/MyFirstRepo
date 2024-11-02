import { LightningElement } from 'lwc';

export default class SearchableCombo extends LightningElement {
    value = 'inProgress';
    showinput = false;

    options = [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Finished', value: 'finished' },
        { label: 'New1', value: 'new1' },
        { label: 'New2', value: 'new2' },
        { label: 'New3', value: 'new3' },
        { label: 'New4', value: 'new4' },
    ];

    filteredOptions = [...this.options];

    handleChange(event) {
        this.value = event.detail.value;
    }

    toggleInput(event) {
        this.showinput = true;
    }

    handleInputChange(event) {
        const searchValue = event.target.value.toLowerCase();
        this.filteredOptions = this.options.filter(item => item.label.toLowerCase().includes(searchValue));
    }
}