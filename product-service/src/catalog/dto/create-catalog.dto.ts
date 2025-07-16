import {Category} from "../entities/catalog.entity";

export class CreateCatalogDto {

    name: string;
    category: Category;
    price: number;
    isExist: boolean;
    score: number;
    createdAt: Date;
}
