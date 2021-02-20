import {
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // query
  @Get()
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.userService.fetch(id);
  }

  // create
  @Post()
  save(@Body() { message }): string {
    return this.userService.save(message);
  }

  // update
  @Patch('id')
  update(@Param() { id }, @Body() { message }): string {
    return this.userService.update(id, message);
  }

  // delete
  @Delete()
  remove(@Query() { id }): string {
    return this.userService.remove(id);
  }
}
