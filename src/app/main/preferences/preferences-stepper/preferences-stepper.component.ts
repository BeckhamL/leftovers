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
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  
  cuisines = [
    {key: CuisineModel.Asian, value: 'Asian'},
    {key: CuisineModel.French, value: 'French'},
    {key: CuisineModel.Greek, value: 'Greek'},
    {key: CuisineModel.Indian, value: 'Indian'},
    {key: CuisineModel.Italian, value: 'Italian'},
    {key: CuisineModel.Japanese, value: 'Japanese'},
    {key: CuisineModel.Mexican, value: 'Mexican'},
  ];

  preparationTime = [
    {key: '5 Mins', value: '5 Mins'},
    {key: '10 Mins', value: '10 Mins'},
    {key: '15 Mins', value: '15 Mins'},
    {key: '25 Mins', value: '25 Mins'},
    {key: '30 Mins', value: '30 Mins'}
  ];

  servingSize = [
    {key: '1', value: '1 person'},
    {key: '2', value: '2 people'},
    {key: '4', value: '4 people'},
    {key: '6', value: '6 people'},
    {key: '10', value: '10 people'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }
}
