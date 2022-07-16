import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUser(apiKey: string) {
    if (!apiKey) {
      throw new NotFoundException('No api-key provided for verification');
    }
    const user = await this.userModel.findOne({ apiKey });
    if (!user) {
      return {
        message: 'User not found',
        status: 404,
      };
    }
    return {
      message: 'User found',
      status: 200,
      data: user.apiKey,
    };
  }

  async createUser() {
    console.log(uuid);
    return await this.userModel.create({
      apiKey: uuid(),
    });
  }
}
