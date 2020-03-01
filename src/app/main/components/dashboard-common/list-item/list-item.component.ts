import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../../site-common/edit-modal/edit-modal.component';
import { ConfirmationModalComponent } from '../../site-common/confirmation-modal/confirmation-modal.component';
import { IngredientsService } from '../../../services/ingredients.service';
@Component({
  selector: 'dashboard-common-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnChanges {

  @Input()
  itemName: string;

  @Output()
  deleteItem = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog,
    private ingredientService: IngredientsService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  deleteSelectedItem(itemSelected: string): void {

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '500px',
      data: {dialogTitle: 'Are you sure you want to delete ' + itemSelected + ' from the list?'}
    });
    //this.deleteItem.emit(itemSelected);
  }

  editSelectedItem(itemSelected: string): void {

    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '500px',
      data: {itemValue: itemSelected}
    });
  }

}
