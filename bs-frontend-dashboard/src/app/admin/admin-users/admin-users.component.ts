import {Component, OnInit} from '@angular/core';

import {AdminUsersService} from "./services/admin-users.service";
import {User} from "../../core/users/models/user";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  public users: User[] = [];

  public isPending = false;

  public selected: User;

  public createDialogDisplay = false;

  public editDialogDisplay = false;

  constructor(
    private adminUsersService: AdminUsersService
  ) {
  }

  ngOnInit() {
    this.load();
  }

  public load(): void {
    this.isPending = true;
    this.adminUsersService.loadUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.isPending = false;
      });
  }

  public showCreateDialog(): void {
    this.createDialogDisplay = true;
  }

  public showEditDialog(): void {
    this.editDialogDisplay = true;
  }

  public closeDialogs(): void {
    this.editDialogDisplay = false;
    this.createDialogDisplay = false;
  }

  public createUser(user: User): void {
    this.isPending = true;
    this.adminUsersService.createUser(user)
      .subscribe((users: User[]) => {
        this.users = users;
        this.isPending = false;
        this.closeDialogs();
      });
  }
  public editUser(user: User): void {
    this.isPending = true;
    this.adminUsersService.editUser(user)
      .subscribe((users: User[]) => {
        this.users = users;
        this.isPending = false;
        this.closeDialogs();
      });
  }

  public deleteUser(): void {
    this.isPending = true;
    this.adminUsersService.deleteUser(this.selected)
      .subscribe((users: User[]) => {
        this.users = users;
        this.isPending = false;
      });
  }
}
