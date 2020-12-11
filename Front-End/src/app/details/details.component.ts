import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() item: IItem;

  constructor() { }

  ngOnInit(): void {
  }
}
