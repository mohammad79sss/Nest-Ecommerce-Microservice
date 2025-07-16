import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    create(createCatalogDto: CreateCatalogDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateCatalogDto: UpdateCatalogDto): string;
    remove(id: number): string;
}
