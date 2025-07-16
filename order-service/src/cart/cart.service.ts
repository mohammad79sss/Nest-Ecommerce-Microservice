import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Cart} from "./entities/cart.entity";

@Injectable()
export class CartService {

  constructor(@InjectRepository(Cart) private readonly cartRepository: Repository<Cart>) {
  }

  async create(createCartDto: CreateCartDto) {
    try {
      const cart = await this.cartRepository.save(createCartDto);
      return {
        message: 'success',
        data: cart,
      };
    } catch (err){
      throw new InternalServerErrorException(err);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.cartRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' }, // optional if you have createdAt
      });

      return {
        message: 'Carts retrieved successfully',
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


  async findOne(id: number) {
    try {
      const cart = await this.cartRepository.findOne({ where: { id } });
      if (!cart) {
        throw new NotFoundException();
      }
      return {
        message: 'success',
        data: cart,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }

  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    try {
      const result = await this.cartRepository.update(id, updateCartDto);
      if (!result) {
        throw new NotFoundException();
      }
      const updatedCart = await this.cartRepository.findOne({ where : {id}});
      return {
        message: 'success',
        data: updatedCart,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }

  }

  async remove(id: number) {
    try {
      const result = await this.cartRepository.delete(id);
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
