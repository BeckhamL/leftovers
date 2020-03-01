import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IngredientsService } from '../../../services/ingredients.service';

@Component({
  selector: 'site-common-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  selectedItem: string;
  formGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditModalComponent>,
    private ingredientService: IngredientsService
  ) { }

  ngOnInit() {
    this.selectedItem = this.data.itemValue;
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = new FormGroup({
      editedItem: new FormControl(this.selectedItem)
    });
  }

  onSubmit() {
    const index = this.ingredientService.selectedIngredient(this.formGroup.value.editedItem);
    console.log(index);
    this.ingredientService.editIngredient(this.formGroup.value.editedItem, index);
    this.dialogRef.close();
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}
