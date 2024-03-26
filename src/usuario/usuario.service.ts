import { Injectable } from '@nestjs/common';
import { User, UserUpdatingRequest } from './user/user';

@Injectable()
export class UsuarioService {
  users: User[] = [];

  list(): User[] {
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  save(user: User) {
    this.users.push(user);
  }

  update(id: number, userUpdateData: UserUpdatingRequest) {
    this.users.forEach((user) => {
      if (user.id === id) {
        user.name = userUpdateData.name;
        user.email = userUpdateData.email;
      }
    });
  }
  delete(id: number) {
    this.users = this.users.filter((user) => user.id != id);
  }
}
