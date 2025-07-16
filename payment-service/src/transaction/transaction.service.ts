import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Transaction} from "./entities/transaction.entity";
import {Repository} from "typeorm";

@Injectable()
export class TransactionService {
  constructor(
      @InjectRepository(Transaction)
      private readonly transactionRepository: Repository<Transaction>,) {
  }


  async create(createTransactionDto: CreateTransactionDto) {
    try {
      await this.transactionRepository.save(createTransactionDto);
      return {
        status: HttpStatus.CREATED,
        data: createTransactionDto,
        message: `Transaction created successfully.`,
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    try {
      const [data, total] = await this.transactionRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
        order: {
          createdAt: 'DESC', // optional: sorts latest first
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'Transactions found',
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
      const transaction = await this.transactionRepository.findOne({ where : { id } });
      if (!transaction) {
        return {
          status: HttpStatus.NOT_FOUND,
          data: undefined,
          message: `Transaction with id ${id} not found`,
        }
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
