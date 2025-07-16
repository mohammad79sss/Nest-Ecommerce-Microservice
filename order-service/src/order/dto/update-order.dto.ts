import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  id: string;
  productIds: string[];
  isPaid: boolean;
  refunded: boolean;
  createAt: Date;

}
