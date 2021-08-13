import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'adminpass',
      roles: ['admin'],
    },
    {
      userId: 2,
      username: 'user',
      password: 'userpass',
      roles: ['user']
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
