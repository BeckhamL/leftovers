import { Component, OnInit, Input } from '@angular/core';
import { ButtonModel } from './button.model';
@Component({
  selector: 'site-common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  config: ButtonModel;
  
  constructor() { }

  ngOnInit() {
  }

}
