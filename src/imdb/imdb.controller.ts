import { Controller, Get, Query } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Controller('imdb')
export class ImdbController {
  constructor(private readonly imdbService: ImdbService) {}
  @Get()
  getMovies(
    @Query('title') title?: string,
    @Query('imdb_id') imdb_id?: string,
  ) {
    return this.imdbService.getMovieData(title, imdb_id);
  }
}
