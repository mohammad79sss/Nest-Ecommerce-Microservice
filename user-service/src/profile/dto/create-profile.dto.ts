
import {Role} from "../entities/profile.entity";
import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class CreateProfileDto {

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
