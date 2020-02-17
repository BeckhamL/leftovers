import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../../site-common/edit-modal/edit-modal.component';
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

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  deleteSelectedItem(itemSelected: string): void {
    this.deleteItem.emit(itemSelected);
  }

  editSelectedItem(itemSelected: string): void {

    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '500px'
    });
  }

}
