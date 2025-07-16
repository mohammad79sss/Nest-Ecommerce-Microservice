import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import {Role} from "../../profile/entities/profile.entity";

export class RegisterDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    role: Role
}