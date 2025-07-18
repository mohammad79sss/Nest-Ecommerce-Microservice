// src/gateway.controller.ts
import {Controller, Post, Body, Get, Param, Put, Delete, Query} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import {firstValueFrom} from "rxjs";

@Controller()
export class GatewayController {
  constructor(
      @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
      @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
      @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
      @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  // Health check endpoint
  @Get('health')
  healthCheck() {
    return { status: 'Gateway is running' };
  }

  // Order endpoints==================================================================================================

  @Post('order')
  createOrder(@Body() createOrderDto: any) {
    return this.orderClient.send('createOrder', createOrderDto);
  }

  @Get('order')
  async findAllOrders(@Query('page') page = 1, @Query('limit') limit = 10) {
    console.log("here is gateway");
    const result : any = await firstValueFrom(this.orderClient.send('findAllOrder', {
      page : Number(page),
      limit: Number(limit),
    }));
    return result;
  }

  @Get('order/:id')
  findOneOrder(@Param('id') id: string) {
    return this.orderClient.send('findOneOrder', id);
  }

  @Put('order/:id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: any) {
    return this.orderClient.send('updateOrder', { id: id, ...updateOrderDto });
  }

  @Delete('order/:id')
  removeOrder(@Param('id') id: string) {
    return this.orderClient.send('removeOrder', id);
  }

  //)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

  // Cart endpoints
  @Post('cart')
  createCart(@Body() createCartDto: any) {
    return this.orderClient.send('createCart', createCartDto);
  }

  @Get('cart')
  findAllCarts(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.orderClient.send('findAllCart', {
      page : Number(page),
      limit: Number(limit),
    });
  }

  @Get('cart/:id')
  findOneCart(@Param('id') id: string) {
    return this.orderClient.send('findOneCart', id);
  }

  @Put('cart/:id')
  updateCart(@Param('id') id: string, @Body() updateCartDto: any) {
    return this.orderClient.send('updateCart', { id: id, ...updateCartDto });
  }

  @Delete('cart/:id')
  removeCart(@Param('id') id: string) {
    return this.orderClient.send('removeCart', id);
  }

  // Payment endpoints==================================================================================================

  @Post('refund')
  createRefund(@Body() createRefundDto: any) {
    return this.paymentClient.send('createRefund', createRefundDto);
  }

  @Get('refund')
  findAllRefund(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.paymentClient.send('findAllRefund', {
      page : Number(page),
      limit: Number(limit),
    });
  }

  @Get('refund/:id')
  findOneRefund(@Param('id') id: string) {
    return this.paymentClient.send('findOneRefund', id);
  }

  @Get('refund/:transactionId')
  findOneRefundByTransactionId(@Param('transactionId') transactionId: string) {
    return this.paymentClient.send('findOneRefundByTransactionId', transactionId);
  }

  //)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

  @Post('transaction')
  createTransaction(@Body() createRefundDto: any) {
    return this.paymentClient.send('createTransaction', createRefundDto);
  }

  @Get('transaction')
  findAllTransaction(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.paymentClient.send('findAllTransaction', {
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get('transaction/:id')
  findOneTransaction(@Param('id') id: string) {
    return this.paymentClient.send('findOneTransaction', id);
  }



  // Product endpoints==================================================================================================

  @Post('catalog')
  createCatalog(@Body() createCatalogDto: any) {
    console.log("gateway controller",createCatalogDto);
    return this.productClient.send('createCatalog', createCatalogDto);
  }

  @Get('catalog')
  findAllCatalogs(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productClient.send('findAllCatalog', {
      page : Number(page),
      limit: Number(limit),
    });
  }

  @Get('catalog/:id')
  findOneCatalog(@Param('id') id: string) {
    return this.productClient.send('findOneCatalog', id);
  }

  @Put('catalog/:id')
  updateCatalog(@Param('id') id: string, @Body() updateCatalogDto: any) {
    return this.productClient.send('updateCatalog', { id: id, ...updateCatalogDto });
  }

  @Delete('catalog/:id')
  removeCatalog(@Param('id') id: string) {
    return this.productClient.send('removeCatalog', id);
  }

//)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

  @Post('review')
  createReview(@Body() createReviewDto: any) {
    return this.productClient.send('createReview', createReviewDto);
  }

  @Get('review')
  findAllReviews(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productClient.send('findAllReview', {
      page : Number(page),
      limit: Number(limit),
    });
  }

  @Get('review/:id')
  findOneReview(@Param('id') id: string) {
    return this.productClient.send('findOneReview', id);
  }

  @Put('review/:id')
  updateReview(@Param('id') id: string, @Body() updateReviewDto: any) {
    return this.productClient.send('updateReview', { id: id, ...updateReviewDto });
  }

  @Delete('review/:id')
  removeReview(@Param('id') id: string) {
    return this.productClient.send('removeReview', id);
  }

  @Get('review/product/:productId')
  findAllReviewByProductId(
      @Param('productId') productId: string,
      @Query('page') page = 1,
      @Query('limit') limit = 10
  ) {
    return this.productClient.send('findAllReviewByProductId', {
      productId,
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get('review/user/:userId')
  findAllByUserId(
      @Param('userId') userId: string,
      @Query('page') page = 1,
      @Query('limit') limit = 10
  ) {
    return this.productClient.send('findAllReviewByUserId', {
      userId,
      page: Number(page),
      limit: Number(limit),
    });
  }



  // User endpoints==================================================================================================

  @Post('auth/register')
  register(@Body() registerDto: any) {
    return this.userClient.send('register', registerDto);
  }

  @Post('auth/login')
  login(@Body() loginDto: any) {
    return this.userClient.send('login', loginDto);
  }

//)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))


  @Get('profile')
  findAllProfiles(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.userClient.send('findAllProfile', {
      page : Number(page),
      limit: Number(limit),
    });
  }

  @Get('profile/:id')
  findOneProfile(@Param('id') id: string) {
    return this.userClient.send('findOneProfile', id);
  }

  @Put('profile/:id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: any) {
    return this.userClient.send('updateProfile', { id: id, ...updateProfileDto });
  }

  @Delete('profile/:id')
  removeProfile(@Param('id') id: string) {
    return this.userClient.send('removeProfile', id);
  }


}