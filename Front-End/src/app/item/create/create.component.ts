import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.itemService
    .create(data)
    .subscribe({
      next: () => {
        this.router.navigate(["/item"]);
      },
      error: (err) => {

      }
    })
  }
}
