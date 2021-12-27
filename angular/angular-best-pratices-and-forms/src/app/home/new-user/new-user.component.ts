import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minValidator } from './min.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';
import { userPasswordValidator } from './user-password.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistService: UserExistsService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        userName: [
          '',
          [Validators.required, minValidator],
          [this.userExistService.userExists()],
        ],
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.maxLength(4)]],
        password: ['', [Validators.required]],
      },
      {
        validators: [userPasswordValidator],
      }
    );
  }

  newAccount() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);
  }
}
