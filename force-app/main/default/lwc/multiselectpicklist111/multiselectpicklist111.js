import { LightningElement ,track} from 'lwc';

export default class Multiselectpicklist111 extends LightningElement {
 label='industry'
 inputValue
 comboboxIsRendered
 dropDownInFocus = false;
 value = [];
 @track inputValue = 'All';
 hasRendered;


 options=[
            {value:'Agriculture',label:'Agriculture'},
            {value:'Agriculture',label:'Agriculture'},
            {value:'Agriculture',label:'Agriculture'},
            {
                value: 'All',
                label: 'All'
            }
            
        ]

        renderedCallback() {
            if (!this.hasRendered) {
                //  we coll the logic once, when page rendered first time
                this.handleDisabled();
            }
            this.hasRendered = true;
        }

        handleDisabled(){
            let input = this.template.querySelector("input");
            
            if (input){
                input.disabled = this.disabled;
            }
        }


        handleClick() {
            let sldsCombobox = this.template.querySelector(".slds-combobox");
            console.log(JSON.stringify(sldsCombobox))
            sldsCombobox.classList.toggle("slds-is-open");//toggle is used to switch
            if (!this.comboboxIsRendered){
                let allOption = this.template.querySelector('[data-id="All"]');
                console.log(JSON.stringify(allOption))
                //allOption.firstChild.classList.add("slds-is-selected");
                
                this.comboboxIsRendered = true;
            }
        }

        handleSelection(event) {
            let value = event.currentTarget.dataset.value;
            if (value === 'All') {
                this.handleAllOption();
            }
            else {
                this.handleOption(event, value);
            }
            let input = this.template.querySelector("input");
            input.focus();
           // this.sendValues();
        }

        handleAllOption(){
            this.value = [];
            this.inputValue = 'All';
            let listBoxOptions = this.template.querySelectorAll('.slds-is-selected');
            console.log(listBoxOptions)
            for (let option of listBoxOptions) {
                console.log(option)
                option.classList.remove("slds-is-selected");
            }
            let allOption = this.template.querySelector('[data-id="All"]');
            console.log(allOption)
            allOption.firstChild.classList.add("slds-is-selected");
            this.closeDropbox();
        }

        handleOption(event, value){
            let listBoxOption = event.currentTarget.firstChild;
            console.log(JSON.stringify(listBoxOption));
            console.log(JSON.stringify(listBoxOption));
            if (listBoxOption.classList.contains("slds-is-selected")) {
                this.value = this.value.filter(option => option.value !== value);
                console.log(this.value)
                console.log(this.value)
            }
            else {
            
                let allOption = this.template.querySelector('[data-id="All"]');
                allOption.firstChild.classList.remove("slds-is-selected");
                let option = this.options.find(option => option.value === value);
                this.value.push(option);
            }
            if (this.value.length > 1) {
                this.inputValue = this.value.length + ' options selected';
                console.log(this.inputValue)
            }
            else if (this.value.length === 1) {
                this.inputValue = this.value[0].label;
                console.log(this.inputValue)
            }
            else {
                this.inputValue = 'All';
            }
            listBoxOption.classList.toggle("slds-is-selected");
        }

        handleBlur() {
            if (!this.dropDownInFocus) {
                this.closeDropbox();
            }
        }
        handleMouseleave() {
            this.dropDownInFocus = false;
        }
        handleMouseEnter() {
            this.dropDownInFocus = true;
        }
        closeDropbox() {
            let sldsCombobox = this.template.querySelector(".slds-combobox");
            sldsCombobox.classList.remove("slds-is-open");
        }

    }