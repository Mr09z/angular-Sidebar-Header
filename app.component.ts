import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import {
  SidebarComponent,
  ClickEventArgs,
  NodeSelectEventArgs,
} from '@syncfusion/ej2-angular-navigations';
import {
  ListViewComponent,
  SelectEventArgs,
} from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('sidebar')
  public sidebarobj: SidebarComponent;
  @ViewChild('listview')
  public listObj: ListViewComponent;
  //ListView data source initialization
  public inboxData: { [key: string]: Object }[] = [
    {
      
    },
  ];
  public sentItemData: { [key: string]: Object }[] = [
    {
    }
  ];
  public draftsData: { [key: string]: Object }[] = [
    { 
    },
  ];
  public deleteData: { [key: string]: Object }[] = [
    {
     
    },
  ];
  public outBoxData: { [key: string]: Object }[] = [
    {
      
    },
  ];
  public treeData: { [key: string]: Object }[] = [
    { id: '1', name: 'Initiation', hasChild: true, expanded: true },
    { id: '1', name: 'Appraisal', hasChild: true, expanded: true },
    { id: '1', name: 'Credit Proposal', hasChild: true, expanded: true },
    { id: '1', name: 'Loan Analysis Proposal', hasChild: true, expanded: true },
    { id: '1', name: 'Offering Letter & Legal', hasChild: true, expanded: true },
    { id: '1', name: 'Disbursment', hasChild: true, expanded: true },
    { id: '7', name: 'MIS report', hasChild: true, expanded: true },
    { id: '2', name: 'MIS', selected: true, pid: '1' },
    { id: '3', name: 'Sent Items', pid: '1' },
    { id: '5', name: 'John', hasChild: true, expanded: true },
    { id: '6', name: 'Inbox', pid: '5' },
    { id: '7', name: 'Drafts', pid: '5' },
    { id: '8', name: 'Deleted Items', pid: '5' },
    { id: '9', name: 'Sent Items', pid: '5' },
    { id: '12', name: 'Outbox', pid: '5' },
  ];
  public fields: { [key: string]: Object } = { id: 'id', text: 'text' };
  public treeFields: { [key: string]: Object } = {
    dataSource: this.treeData,
    id: 'id',
    text: 'name',
    selected: 'selected',
    parentID: 'pid',
    hasChildren: 'hasChild',
    expanded: 'expanded',
  };
  // only for sample browser use
  constructor() {}
  //open / close the sidebar
  toolbarCliked(args: ClickEventArgs) {
    if (args.item.tooltipText == 'Menu') {
      this.sidebarobj.toggle();
    }
  }
  beforeSelect(args: NodeSelectEventArgs) {
    if (args.nodeData.text == 'Initiation' || 
    args.nodeData.text == 'Appraisal'|| 
    args.nodeData.text == 'Credit Proposal'||
    args.nodeData.text == 'Loan Analysis Proposal'||
    args.nodeData.text == 'Offering Letter & Legal'||
    args.nodeData.text == 'Disbursment'||
    args.nodeData.text == 'MIS Report') {
      args.cancel = true;
    }
  }
  onSelect(args: NodeSelectEventArgs) {
    if (args.nodeData.text == 'Inbox') {
      this.listObj.dataSource = this.inboxData;
    } else if (args.nodeData.text == 'Sent Items') {
      this.listObj.dataSource = this.sentItemData;
    } else if (args.nodeData.text == 'Drafts') {
      this.listObj.dataSource = this.draftsData;
    } else if (args.nodeData.text == 'Deleted Items') {
      this.listObj.dataSource = this.deleteData;
    } else if (args.nodeData.text == 'Outbox') {
      this.listObj.dataSource = this.outBoxData;
    }
    this.listObj.dataBind();
  }
  onListSelect(args: SelectEventArgs) {
    args.item.classList.remove('e-active');
  }
}
