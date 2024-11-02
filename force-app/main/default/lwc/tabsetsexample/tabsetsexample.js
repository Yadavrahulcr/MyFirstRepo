import { LightningElement, track,wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, refreshTab } from 'lightning/platformWorkspaceApi';
export default class Tabsetsexample extends LightningElement {
   


    @wire(IsConsoleNavigation) isConsoleNavigation;

    handleClick() {
        if (this.isConsoleNavigation) {
            getFocusedTabInfo().then((tabInfo) => {
                console.log(tabInfo)
                refreshTab(tabInfo.tabId);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}