import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../form-styles.css']
})
export class RegisterComponent implements OnInit {
  isLoading= false;
  errorMessage: string = "";

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: { email: string, password: string, rePassword: string }): void {
    this.isLoading = true;
    this.errorMessage = "";
    this.userService.register(formValue).subscribe({
      next: (data) => {
      this.isLoading = false;
      this.router.navigate(["/"]);
      // this.router.navigate(["/item"]);
      // this.router.navigate(["/user/login"]);
    }, 
      error: (err) => {
        this.errorMessage = "ERROR!";
        this.isLoading = false;
      }
    });
  }
}
