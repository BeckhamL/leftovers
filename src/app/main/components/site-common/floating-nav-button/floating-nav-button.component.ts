import { Component, OnInit, Input } from '@angular/core';
import { FloatingNavButtonModel } from  './floating-nav-button.model';

@Component({
  selector: 'site-common-floating-nav-button',
  templateUrl: './floating-nav-button.component.html',
  styleUrls: ['./floating-nav-button.component.scss']
})
export class FloatingNavButtonComponent implements OnInit {

  @Input()
  config: FloatingNavButtonModel;
  constructor() { }

  ngOnInit() {
  }

}
