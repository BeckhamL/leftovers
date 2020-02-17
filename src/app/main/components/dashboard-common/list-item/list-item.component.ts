import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-common-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  itemName: string;
  
  constructor() { }

  ngOnInit() {
  }

}
