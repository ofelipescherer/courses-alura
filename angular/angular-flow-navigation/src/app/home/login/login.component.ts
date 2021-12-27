import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticatorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Erro de login');
        console.log(error);
      }
    );
  }
}
