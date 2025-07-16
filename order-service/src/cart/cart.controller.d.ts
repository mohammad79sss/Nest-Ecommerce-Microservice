import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): Promise<{
        message: string;
        data: CreateCartDto & import("./entities/cart.entity").Cart;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("./entities/cart.entity").Cart[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: import("./entities/cart.entity").Cart;
    }>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<{
        message: string;
        data: import("./entities/cart.entity").Cart | null;
    }>;
    remove(id: number): Promise<{
        message: string;
        data: import("typeorm").DeleteResult;
    }>;
}
