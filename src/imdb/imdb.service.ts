import { Injectable, NotFoundException } from '@nestjs/common';
import { IMDB } from './imdb.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImdbService {
  constructor(@InjectModel('IMDB') private readonly imdbModel: Model<IMDB>) {}
}
