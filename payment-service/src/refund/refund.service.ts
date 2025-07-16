import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRefundDto } from './dto/create-refund.dto';
import { Refund } from './entities/refund.entity';

@Injectable()
export class RefundService {
  constructor(
      @InjectRepository(Refund)
      private readonly refundRepository: Repository<Refund>,
  ) {}

  async create(createRefundDto: CreateRefundDto) {
    try {
      const refund = this.refundRepository.create(createRefundDto);
      const savedRefund = await this.refundRepository.save(refund);
      return {
        message: 'Refund created successfully.',
        data: savedRefund,
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.refundRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: { createdAt: 'DESC' },
      });

      return {
        message: 'Refunds retrieved successfully',
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async findOne(id: string) {
    try {
      const refund = await this.refundRepository.findOne({ where : { id } });
      if (!refund) {
        throw new HttpException(`Refund with id ${id} not found`, HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Successfully found',
        data: refund,
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneByTransactionId(transactionId: string) {
    try {
      const refund = await this.refundRepository.findOne({ where: { transactionId } });
      if (!refund) {
        throw new HttpException(`Refund with transactionId ${transactionId} not found`, HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Successfully found',
        data: refund,
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
