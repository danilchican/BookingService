import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../../core/users/models/user";
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../../../core/users/dto/user-dto";

@Injectable()
export class AdminUsersService {

  private static readonly LOAD_USERS = 'http://localhost:8080/clients';

  private static readonly CREATE_USER = 'http://localhost:8080/clients';

  private static readonly EDIT_USER = 'http://localhost:8080/clients/';

  private static readonly DELETE_USER = 'http://localhost:8080/clients/';

  constructor(
    private http: HttpClient
  ) {
  }

  public loadUsers(): Observable<User[]> {
    return this.http.get(AdminUsersService.LOAD_USERS)
      .map((users: UserDto[]) => users.map(dto => User.fromDTO(dto)));
  }

  public createUser(user: User): Observable<User[]> {
    return this.http.post(AdminUsersService.CREATE_USER, user)
      .switchMap(() => this.loadUsers());
  }

  public editUser(user: User): Observable<User[]> {
    return this.http.put(`${AdminUsersService.EDIT_USER}${user.id}`, user)
      .switchMap(() => this.loadUsers());
  }

  public deleteUser(user: User): Observable<User[]> {
    return this.http.delete(`${AdminUsersService.DELETE_USER}${user.id}`)
      .switchMap(() => this.loadUsers());
  }
}
