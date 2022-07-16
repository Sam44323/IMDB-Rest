import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(@Headers('apiKey') header: string) {
    console.log('Headers', header);
    return this.userService.getUser(header);
  }

  @Post('/create')
  createUser() {
    return this.userService.createUser();
  }
}
