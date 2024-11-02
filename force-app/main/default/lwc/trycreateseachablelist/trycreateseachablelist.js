import { LightningElement } from 'lwc';

export default class Trycreateseachablelist extends LightningElement {
    showlist=false;
    isListening = false;
    searchResults
    selectedSearchResult
    valuuee 
    data

    options=[];

    connectedCallback() {
        const url = 'https://qa-salesforce.acuityplatform.com/api/v1/salesforce/licensee/licenseeType/5';

        
        const headers = new Headers();
     //   headers.append('Authorization', 'Bearer YOUR_ACCESS_TOKEN'); // if needed
     //   headers.append('Content-Type', 'application/json');
        headers.append('X-Salesforce-Organization-Id', '00DRK000001gvKj');

        // Set up the fetch options
        const fetchOptions = {
            method: 'GET', // or 'POST' if needed
            headers: headers,
        };

        // Perform the fetch call
        fetch(url, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                this.data = data;
                console.log('Fetched data:', this.data);
                console.log(this.data.ArrayList);

                this.data.ArrayList.fetch((item)=>{

                    this.options.push({'label':item.name,'value':item.id})
                })

                console.log(this.options);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    
    cheakhandler(event){
        console.log('check handler called');
        this.showlist=true;
    }


    renderedCallback() {
        if (this.isListening) return;

        window.addEventListener("click", (event) => {
            this.hideDropdown(event);
        });
        this.isListening = true;
    }
       

    hideDropdown(event) {
        console.log('eventlistencalled');
        const cmpName = this.template.host.tagName;
        console.log('cmpName'+cmpName);
        const clickedElementSrcName = event.target.tagName;
       // console.log()

        console.log('clickedeleementscreen'+clickedElementSrcName);
        const isClickedOutside = cmpName !== clickedElementSrcName;
        if (this.searchResults && isClickedOutside) {
           // this.clearSearchResults();
           this.showlist
        }
    }
   

    selectSearchResult(event) {
        console.log('seachhandelercalled')
        const selectedValue = event.currentTarget.dataset.value;
        console.log(selectedValue);
        // this.selectedSearchResult = this.pickListOrdered.find(
        //     (pickListOption) => pickListOption.value === selectedValue
        // );
        // this.clearSearchResults();
        this.valuuee = selectedValue;
        this.showlist = false

    }




    clearSearchResults() {
        this.searchResults = null;
    }

   


}