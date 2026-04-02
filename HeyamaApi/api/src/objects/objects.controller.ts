import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectsService } from './objects.service';
import { AppGateway } from './gateway';
import { S3Service } from './s3.service';


@Controller('objects')
export class ObjectsController {
  constructor(
    private service: ObjectsService,
    private s3: S3Service,
    private gateway: AppGateway,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@UploadedFile() file, @Body() body) {
    const imageUrl = await this.s3.upload(file);

    const object = await this.service.create({
      ...body,
      imageUrl,
    });

    this.gateway.emitNewObject(object);

    return object;
  }

  @Get()
findAll() {
  return { message: "API OK" };
}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const object = await this.service.findOne(id);

    const key = object.imageUrl.split('/').pop();
    await this.s3.delete(key);

    await this.service.delete(id);

    this.gateway.emitDelete(id);

    return { message: 'Deleted' };
  }
}