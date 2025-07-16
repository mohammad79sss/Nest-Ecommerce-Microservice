import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogDto } from './create-catalog.dto';
import {Category} from "../entities/catalog.entity";

export class UpdateCatalogDto extends PartialType(CreateCatalogDto) {
  id: string;
  name: string;
  category: Category;
  price: number;
  isExist: boolean;
  score: number;
  createdAt: Date;

}
