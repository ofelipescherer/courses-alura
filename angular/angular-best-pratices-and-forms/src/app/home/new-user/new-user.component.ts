import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.maxLength(4)]],
      password: ['', [Validators.required]],
    });
  }

  newAccount() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
