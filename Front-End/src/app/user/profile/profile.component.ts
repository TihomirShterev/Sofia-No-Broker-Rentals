import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get currentUser(): IUser {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.userService.getProfile().subscribe();
  }

}
