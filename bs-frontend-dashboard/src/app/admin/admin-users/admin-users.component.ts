import {Component, OnInit} from '@angular/core';
import {LazyLoadEvent} from "primeng/api";
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
      .take(1)
      .subscribe((users: User[]) => {
        this.users = users;
        this.isPending = false;
      });
  }

  public showCreateDialog(): void {
    this.createDialogDisplay = true;
  }

  public closeCreateDialog(): void {
    this.createDialogDisplay = false;
  }

  public showEditDialog(): void {
    this.editDialogDisplay = true;
  }

  public closeEditDialog(): void {
    this.editDialogDisplay = false;
  }
}
