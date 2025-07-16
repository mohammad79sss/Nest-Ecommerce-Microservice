import {Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "../order/entities/order.entity";
import {Repository} from "typeorm";

@Injectable()
export class OrderService {

  constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>) {
  }

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = await this.orderRepository.save(createOrderDto);
      return {
        message: 'success',
        data: order,
      };
    } catch (err){
      throw new InternalServerErrorException(err);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.orderRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Orders retrieved successfully',
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
      const order = await this.orderRepository.findOne({ where: { id } });
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

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const result = await this.orderRepository.update(id, updateOrderDto);
      if (!result) {
        throw new NotFoundException();
      }
      const updatedOrder = await this.orderRepository.findOne({ where : {id}});
      return {
        message: 'success',
        data: updatedOrder,
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.orderRepository.delete(id);
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
