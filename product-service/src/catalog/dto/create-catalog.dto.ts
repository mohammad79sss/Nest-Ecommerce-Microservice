import { IsEnum, IsString, IsNumber, IsBoolean, IsDateString } from 'class-validator';
import { Category } from '../entities/catalog.entity';

export class CreateCatalogDto {
    @IsString()
    name: string;

    @IsEnum(Category)
    category: Category;

    @IsNumber()
    price: number;

    @IsBoolean()
    isExist: boolean;


/*    can remove later*/
    @IsNumber()
    score: number;

    @IsDateString()
    createdAt: string;
}
