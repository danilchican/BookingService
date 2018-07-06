import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginDisplay = false;

  constructor() { }

  ngOnInit() {
  }

  public showLogin(): void {
    this.loginDisplay = true;
  }

}
