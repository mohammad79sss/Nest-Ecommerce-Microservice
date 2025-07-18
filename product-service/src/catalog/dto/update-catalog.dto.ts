import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogDto } from './create-catalog.dto';
import {Category} from "../entities/catalog.entity";
import {IsBoolean, IsDateString, IsEnum, IsNumber, IsString} from "class-validator";

export class UpdateCatalogDto extends PartialType(CreateCatalogDto) {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsEnum(Category)
  category: Category;

  @IsNumber()
  price: number;

  @IsBoolean()
  isExist: boolean;

  @IsNumber()
  score: number;

  @IsDateString()
  createdAt: string;

}
