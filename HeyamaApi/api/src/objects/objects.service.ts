
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ObjectsService {
  constructor(@InjectModel('Object') private model: Model<any>) {}

  create(data) { return this.model.create(data); }
  findAll() { return this.model.find(); }
  findOne(id) { return this.model.findById(id); }
  delete(id) { return this.model.findByIdAndDelete(id); }
}
