import {Controller, Param} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @MessagePattern('createCart')
  async create(@Payload() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @MessagePattern('findAllCart')
  async findAll(@Payload() payload: { page?: number; limit?: number }) {
    return this.cartService.findAll();
  }

  @MessagePattern('findOneCart')
  async findOne(@Payload() id: number) {
    return this.cartService.findOne(id);
  }

  @MessagePattern('updateCart')
  async update(@Param('id') id: number,@Payload() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  @MessagePattern('removeCart')
  async remove(@Payload() id: number) {
    return this.cartService.remove(id);
  }
}
