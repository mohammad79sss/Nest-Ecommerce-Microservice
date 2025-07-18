import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import {IsNumber, IsString} from "class-validator";

export class UpdateReviewDto extends PartialType(CreateReviewDto) {

  @IsString()
  id: string;

  @IsString()
  content : string;

  @IsNumber()
  score : number;


}
