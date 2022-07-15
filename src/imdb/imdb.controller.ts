import { Controller, Get } from '@nestjs/common';

@Controller('imdb')
export class ImdbController {
  @Get()
  getMovies() {
    return 'this is the movie';
  }
}
