import {  PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class S3Service {
  
  private client: S3Client;

  constructor() {
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  const endpoint = process.env.S3_ENDPOINT;

  if (!accessKeyId || !secretAccessKey || !endpoint) {
    throw new Error('Identifiants S3 manquants');
  }

  this.client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

  async upload(file: Express.Multer.File) {

    if (!file) {
    throw new Error("Fichier manquant");
  }
  console.log("BUCKET 👉", process.env.S3_BUCKET);
    const key = Date.now() + '-' + file.originalname;

    await this.client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return `${process.env.S3_PUBLIC_URL}/${key}`;
  }

  async delete(key: string) {
    await this.client.send(
      new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: key,
      }),
    );
  }
  
}

