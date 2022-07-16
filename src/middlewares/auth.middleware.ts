import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.model';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async use(req: Request, res: Response, next: () => void) {
    const validAPI = await this.userModel.findOne({
      apiKey: req.headers['apikey'],
    });
    if (!validAPI) {
      return res.status(401).send({
        message: 'Unauthorized',
        status: 401,
      });
    }
    next();
  }
}
