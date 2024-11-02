import { LightningElement, track } from 'lwc';

export default class Datatable extends LightningElement {
    @track data = [
        { id: '1', name: 'John Doe', age: 30, email: 'john.doe@example.com', isEditingEmail: false },
        { id: '2', name: 'Jane Smith', age: 25, email: 'jane.smith@example.com', isEditingEmail: false },
        { id: '3', name: 'Mark Johnson', age: 35, email: 'mark.johnson@example.com', isEditingEmail: false }
    ];

    handleEmailChange(event) {
        const rowId = event.target.dataset.id;
        const newEmail = event.target.value;

        this.data = this.data.map(item => 
            item.id === rowId ? { ...item, email: newEmail, isEditingEmail: false } : item
        );
    }

    toggleEditEmail(event) {
        const rowId = event.target.dataset.id;

        this.data = this.data.map(item => 
            item.id === rowId ? { ...item, isEditingEmail: !item.isEditingEmail } : item
        );
    }
}