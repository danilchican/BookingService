import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  @Output() public loginEvent: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public login(): void {
    this.loginEvent.emit();
  }
}
