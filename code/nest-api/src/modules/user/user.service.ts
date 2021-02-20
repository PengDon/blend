import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  fetch(id): string {
    return `查询id:${id} 用户信息`;
  }

  save(message): string {
    return `Set user done. ${message}`;
  }

  update(id: string, message: string): string {
    return `Update user done. ${id}:${message}`;
  }

  remove(id: number): string {
    return `${id} Record was Removed`;
  }
}
