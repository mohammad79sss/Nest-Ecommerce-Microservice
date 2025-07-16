import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import {Repository} from "typeorm";
import {Catalog} from "./entities/catalog.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CatalogService {
  constructor(@InjectRepository(Catalog) private readonly catalogRepository: Repository<Catalog>) {
  }


  async create(createCatalogDto: CreateCatalogDto) {
    try {
      const catalog = await this.catalogRepository.save(createCatalogDto);
      return {
        message: 'success',
        data: catalog,
      };
    } catch (err){
      throw new InternalServerErrorException(err);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.catalogRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Catalogs retrieved successfully',
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.catalogRepository.findOne({ where: { id } });
      if (!order) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: order,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, updateCatalogDto: UpdateCatalogDto) {
    try {
      const result = await this.catalogRepository.update(id, updateCatalogDto);
      if (!result) {
        throw new NotFoundException();
      }
      const updatedCatalog = await this.catalogRepository.findOne({ where : {id}});
      return {
        message: 'success',
        data: updatedCatalog,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.catalogRepository.delete(id);
      if (!result) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: result,
      }
    }
    catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
