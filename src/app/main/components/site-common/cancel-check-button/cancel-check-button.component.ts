import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CancelCheckButtonModel } from './cancel-check-button.model';

@Component({
  selector: 'site-common-cancel-check-button',
  templateUrl: './cancel-check-button.component.html',
  styleUrls: ['./cancel-check-button.component.scss']
})
export class CancelCheckButtonComponent implements OnInit {


  @Input()
  config: CancelCheckButtonModel;

  @Output()
  cancel = new EventEmitter();
  @Output()
  check = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickCancel() {
    this.cancel.emit();
  }

  onClickCheck() {
    this.check.emit();
  }

}
