import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;

  constructor() { }

  ngOnInit(): void {
  }
  
}
