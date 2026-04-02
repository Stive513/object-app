
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ObjectsModule } from './objects/objects.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot('mongodb+srv://stiven03:Stiven2004@cluster0.q74ruu8.mongodb.net/?'),
    ObjectsModule
    
  ],
})
export class AppModule {}

