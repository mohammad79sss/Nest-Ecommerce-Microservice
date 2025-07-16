import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';


@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @MessagePattern('createTransaction')
  create(@Payload() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @MessagePattern('findAllTransaction')
  findAll(@Payload() payload: { page?: number; limit?: number }) {
    return this.transactionService.findAll(payload);
  }

  @MessagePattern('findOneTransaction')
  findOne(@Payload() id: string) {
    return this.transactionService.findOne(id);
  }


}
