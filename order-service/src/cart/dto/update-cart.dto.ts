import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateCartDto extends PartialType(CreateCartDto) {
  cartNumber : number;
  expireDate : Date;
}
