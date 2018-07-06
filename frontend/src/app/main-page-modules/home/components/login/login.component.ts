import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() visible: boolean;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public hide() {
    this.visibleChange.emit(false);
  }

  public login(): void {
    this.visibleChange.emit(false);
  }
}
