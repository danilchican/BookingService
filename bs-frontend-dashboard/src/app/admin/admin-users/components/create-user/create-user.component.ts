import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../../../core/users/models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output() public closeEvent: EventEmitter<{}> = new EventEmitter<{}>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  public close(): void {
    this.closeEvent.emit();
  }

  public save(): void {

  }
}
