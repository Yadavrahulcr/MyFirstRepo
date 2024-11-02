import { LightningElement } from 'lwc';

export default class Ee extends LightningElement {

    data = [
        { name: "Ram", city: "Kolkata" },
        { name: "Shyam", city: "Hyderabad" },
        { name: "Jay", city: "Pune" }
    ];

    connectedCallback() {
        // Updating the data array with the 'country' property
        this.data = this.data.map(item => {
            return { ...item, country: 'india' };
        });

        console.log(this.data)

        this.data = JSON.stringify(this.data);
}
    }