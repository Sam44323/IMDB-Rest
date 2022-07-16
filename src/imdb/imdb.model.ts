import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IMDBDocument = IMDB & Document;

@Schema()
export class IMDB {
  @Prop()
  title: string;

  @Prop()
  rating: number;

  @Prop()
  year: number;

  @Prop()
  details: string;
}

export const IMDBSchema = SchemaFactory.createForClass(IMDB);
