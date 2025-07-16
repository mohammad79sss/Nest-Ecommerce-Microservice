import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import {Role} from "../entities/profile.entity";

export class UpdateProfileDto extends PartialType(CreateProfileDto) {

  id: string;

  username: string;

  email: string;

  phone: string;

  address: string;

  role: Role
}
