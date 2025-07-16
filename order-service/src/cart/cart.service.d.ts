import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Repository } from "typeorm";
import { Cart } from "./entities/cart.entity";
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: Repository<Cart>);
    create(createCartDto: CreateCartDto): Promise<{
        message: string;
        data: CreateCartDto & Cart;
    }>;
    findAll(): Promise<{
        message: string;
        data: Cart[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: Cart;
    }>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<{
        message: string;
        data: Cart | null;
    }>;
    remove(id: number): Promise<{
        message: string;
        data: import("typeorm").DeleteResult;
    }>;
}
