import {Controller} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RefundService } from './refund.service';
import { CreateRefundDto } from './dto/create-refund.dto';

@Controller()
export class RefundController {
  constructor(private readonly refundService: RefundService) {}

  @MessagePattern('createRefund')
  create(@Payload() createRefundDto: CreateRefundDto) {
    return this.refundService.create(createRefundDto);
  }

  @MessagePattern('findAllRefund')
  findAll(@Payload() payload: { page?: number; limit?: number }) {
    return this.refundService.findAll();
  }

  @MessagePattern('findOneRefund')
  findOne(@Payload() id: number) {
    return this.refundService.findOne(id);
  }

  @MessagePattern('findOneRefundByTransactionId')
  findOneByTransactionId(@Payload() transactionId: string) {
    return this.refundService.findOneByTransactionId(transactionId);
  }




}
