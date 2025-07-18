import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';


@Controller()
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @MessagePattern('createCatalog')
  create(@Payload() createCatalogDto: CreateCatalogDto) {
    console.log("catalog controller",createCatalogDto);
    return this.catalogService.create(createCatalogDto);
  }

  @MessagePattern('findAllCatalog')
  findAll(@Payload() payload: { page?: number; limit?: number }) {
    return this.catalogService.findAll(payload);
  }

  @MessagePattern('findOneCatalog')
  findOne(@Payload() id: string) {
    return this.catalogService.findOne(id);
  }

  @MessagePattern('updateCatalog')
  update(@Payload() updateCatalogDto: UpdateCatalogDto) {
    return this.catalogService.update(updateCatalogDto.id, updateCatalogDto);
  }

  @MessagePattern('removeCatalog')
  remove(@Payload() id: string) {
    return this.catalogService.remove(id);
  }
}
