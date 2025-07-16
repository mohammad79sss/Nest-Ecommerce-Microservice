import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 Required for repository injection
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './entities/cart.entity'; // 👈 Your entity

@Module({
  imports: [TypeOrmModule.forFeature([Cart])], // 👈 Register Cart entity for DI
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
