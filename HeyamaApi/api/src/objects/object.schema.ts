import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ObjectDocument = ObjectEntity & Document;

@Schema({ timestamps: true })
export class ObjectEntity {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;
}

export const ObjectSchema = SchemaFactory.createForClass(ObjectEntity);