import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'dashboard-common-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {

  formGroup = new FormGroup({
    vegetable : new FormControl('')
  });
  vegetableValues: string[];
  constructor() { }

  ngOnInit() {
    this.vegetableValues = [];
}

  onSubmit() {
    this.vegetableValues.push(this.formGroup.value.vegetable);
    this.formGroup.reset();
  }

}
