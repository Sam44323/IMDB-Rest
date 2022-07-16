import { Injectable, NotFoundException, HttpService } from '@nestjs/common';
import { IMDB } from './imdb.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class ImdbService {
  constructor(
    @InjectModel('IMDB') private readonly imdbModel: Model<IMDB>,
    private readonly http: HttpService,
  ) {}

  async getMovieData(title?: string, imdb_id?: string) {
    console.log('Title: ' + title + ' IMDB ID: ' + imdb_id);
    if (!title && !imdb_id) {
      throw new NotFoundException('No title or imdb_id provided');
    }
    const dataExists = await this.imdbModel.findOne(
      title ? { title } : { imdb_id },
    );
    if (dataExists) {
      return dataExists;
    }
    const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;
    const params = {};
    if (title) {
      params['t'] = title;
    } else if (imdb_id) {
      params['i'] = imdb_id;
    }
    const response: any = await lastValueFrom(
      this.http.get(url, { params }).pipe(map((resp) => resp.data)),
    );
    return await this.imdbModel.create({
      imdb_id: response.imdbID,
      title: response.Title,
      rating: response.imdbRating,
      year: response.Year,
      details: response.Plot,
    });
  }
}
