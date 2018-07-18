import {Component, Input, OnInit} from '@angular/core';
import {CreateUserComponent} from "../create-user/create-user.component";
import {FormBuilder} from "@angular/forms";
import {User} from "../../../../core/users/models/user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends CreateUserComponent implements OnInit {

  @Input() public user: User;

  constructor(
    fb: FormBuilder
  ) {
    super(fb);
  }

  ngOnInit() {
    this.buildForm(this.user);
  }

}
