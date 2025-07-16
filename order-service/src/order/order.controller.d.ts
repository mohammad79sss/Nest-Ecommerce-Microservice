import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        data: CreateOrderDto & import("./entities/order.entity").Order;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("./entities/order.entity").Order[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: import("./entities/order.entity").Order;
    }>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<{
        message: string;
        data: import("./entities/order.entity").Order | null;
    }>;
    remove(id: number): Promise<{
        message: string;
        data: import("typeorm").DeleteResult;
    }>;
}
