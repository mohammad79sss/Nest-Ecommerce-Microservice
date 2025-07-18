import {IsDateString, IsNumber, IsString} from "class-validator";


export class CreateReviewDto {

    @IsString()
    userId: string;

    @IsString()
    productId: string;

    @IsString()
    content : string;

    @IsNumber()
    score : number;

    @IsDateString()
    createdAt: string;
}
