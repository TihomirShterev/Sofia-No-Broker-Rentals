import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/shared/interfaces';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item: IItem = null;

  constructor(
    itemService: ItemService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    itemService.getDetails(id).subscribe(item => {
      this.item = item;
    })
  }

  ngOnInit(): void {
  }

}
