import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-common-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  itemName: string;

  @Output()
  deleteItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteSelectedItem(itemSelected: string): void {
    this.deleteItem.emit(itemSelected);
  }

}
