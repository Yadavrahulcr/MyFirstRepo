import { LightningElement, track, wire, api  } from 'lwc';
import getField from '@salesforce/apex/createdynamictable.getAllColumnsDetail';
import getAllData from '@salesforce/apex/createdynamictable.showAddData';

export default class Dynmictablecolumnselecton extends LightningElement {
    @track iscolumnWindow = false;
    @track minField;
    @track maxField;
    @track allFields = [];
    @track allSelectedField = [];
    @api objectData = [];
    @track columnArrays = [];
    @track fieldsForCloumn = [];
 
    @api 
    get fieldsForCloumns(){
        return this.fieldsForCloumn;
    }
    set fieldsForCloumns(val){
    }

    @wire(getField, {objectApiName : 'Lead'}) setObjectField({error, data}){
        if(data){
            const incomingdata = data;
            console.log('==================>'+JSON.stringify(incomingdata,null,2));
            const fields = [];
            for(let key in data){
                fields.push({
                    label : data[key],
                    value :key
                })
            }
            this.allFields = fields;
        }else if(error){
            console.log(error);
        }
    };

    updateSelectedColumns(event){
        const valueSelected = event.target.value;
        this.allSelectedField = valueSelected;
    }

    showColumnSelectionWindow(event){
        this.iscolumnWindow = true;
    }

    closeModel(event){
        const eventName = event.target.name;
        if(eventName === 'saveAction'){
            const selectedFields = this.allSelectedField;
            const addfields = [];
            const fieldAPI = [];
            for(let i = 0; i < selectedFields.length; i++){
                for(let key in this.allFields){
                    if(this.allFields[key].value === selectedFields[i]){
                        addfields.push({
                            label : this.allFields[key].label,
                            fieldName : this.allFields[key].value
                        });
                        fieldAPI.push(this.allFields[key].value);
                    }
                }
            }
            this.fieldsForCloumn = addfields;
            this.columnArrays = fieldAPI;
            getAllData({selectedField : JSON.stringify(this.columnArrays), objectName: 'Lead'}).then(result =>{
                let allrecords = [];
                for(let i = 0; i < result.length; i++){
                    let rowData = result[i];
                    let row = rowData;
                    row.Id = rowData.Id;
                    for(let col in this.fieldsForCloumns){
                        if(col.fieldName != 'Id'){
                            row[col.fieldName] = rowData[col.fieldName];
                        }
                    }
                    allrecords.push(row);
                }
                this.objectData = allrecords;
            }).catch(error => {
                window.alert(error);
            })
        }
        this.iscolumnWindow = false;
    }

}