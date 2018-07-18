import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output() public closeEvent: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
  }

  public close(): void {
    this.closeEvent.emit();
  }
}
