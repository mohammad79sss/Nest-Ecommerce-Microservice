import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    OrderModule,
    CartModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'Order-service',
        synchronize: true,
        autoLoadEntities: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
