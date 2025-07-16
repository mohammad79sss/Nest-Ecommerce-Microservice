import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from "../order/entities/order.entity";
import { Repository } from "typeorm";
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        data: CreateOrderDto & Order;
    }>;
    findAll(): Promise<{
        message: string;
        data: Order[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: Order;
    }>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<{
        message: string;
        data: Order | null;
    }>;
    remove(id: number): Promise<{
        message: string;
        data: import("typeorm").DeleteResult;
    }>;
}
