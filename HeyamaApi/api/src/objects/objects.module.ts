
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ObjectsController } from './objects.controller';
import { ObjectsService } from './objects.service';
import { ObjectSchema } from './object.schema';
import { S3Service } from './s3.service';
import { AppGateway } from './gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Object', schema: ObjectSchema }])],
  controllers: [ObjectsController],
  providers: [
    ObjectsService,
    S3Service,         AppGateway, ],
})
export class ObjectsModule {}
