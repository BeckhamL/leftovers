import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CuisineModel } from '../../models/preferences_cuisine.model';

@Component({
  selector: 'preferences-stepper',
  templateUrl: './preferences-stepper.component.html',
  styleUrls: ['./preferences-stepper.component.scss']
})
export class PreferencesStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  cuisines = [
    {key: CuisineModel.Asian, value: 'Asian'},
    {key: CuisineModel.French, value: 'French'},
    {key: CuisineModel.Greek, value: 'Greek'},
    {key: CuisineModel.Indian, value: 'Indian'},
    {key: CuisineModel.Italian, value: 'Italian'},
    {key: CuisineModel.Japanese, value: 'Japanese'},
    {key: CuisineModel.Mexican, value: 'Mexican'},
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
