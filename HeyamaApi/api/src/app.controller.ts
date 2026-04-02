import { Controller, Get, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  s3: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //@Post()
//@UseInterceptors(FileInterceptor('image'))
//async create(@UploadedFile() file, @Body() body) {
  //console.log("FILE 👉", file);
  //if (!file) {
    //throw new Error("Image non reçue");
  //}

  //const imageUrl = await this.s3.upload(file);

  //const object = await this.appService.create({
    //...body,
    //imageUrl: "https://via.placeholder.com/150",
  //});

  //return object;
//}
@Post()
@UseInterceptors(FileInterceptor('image'))
async create(@UploadedFile() file, @Body() body) {

  console.log("FILE BACKEND 👉", file);

  const object = await this.appService.create({
    ...body,
    imageUrl: "https://via.placeholder.com/300",
  });

  return object;
}
}
