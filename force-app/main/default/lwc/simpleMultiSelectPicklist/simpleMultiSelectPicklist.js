import { LightningElement, track } from 'lwc';

export default class SimpleMultiSelectPicklist extends LightningElement {
    @track options = [
        { label: 'Option 1', value: 'option1', selected: false },
        { label: 'Option 2', value: 'option2', selected: false },
        { label: 'Option 3', value: 'option3', selected: false }
    ];
    @track isDropdownOpen = false;

    get selectedOptionsLabel() {
        return this.options.filter(option => option.selected).map(option => option.label).join(', ');
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    handleCheckboxChange(event) {
        const value = event.target.dataset.value;
        this.options = this.options.map(option => {
            if (option.value === value) {
                option.selected = event.target.checked;
            }
            return option;
        });
        this.dispatchEvent(new CustomEvent('selectionchange', { detail: this.options.filter(option => option.selected) }));
    }
}