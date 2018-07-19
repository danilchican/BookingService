import {UserDto} from "../dto/user-dto";

export class User {

  public static empty(): User {
    return new User(null, '');
  }

  public static fromDTO(dto: UserDto): User {
    return new User(dto.id, dto.email);
  }

  constructor(
    public id: number,
    public email: string
  ) {}

  public toDTO(): UserDto {
    return {
      id: this.id,
      email: this.email
    };
  }
}
