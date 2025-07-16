"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cart_entity_1 = require("./entities/cart.entity");
let CartService = class CartService {
    cartRepository;
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }
    async create(createCartDto) {
        try {
            const cart = await this.cartRepository.save(createCartDto);
            return {
                message: 'success',
                data: cart,
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    async findAll() {
        try {
            const carts = await this.cartRepository.find();
            return {
                message: 'success',
                data: carts,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async findOne(id) {
        try {
            const cart = await this.cartRepository.findOne({ where: { id } });
            if (!cart) {
                throw new common_1.NotFoundException();
            }
            return {
                message: 'success',
                data: cart,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async update(id, updateCartDto) {
        try {
            const result = await this.cartRepository.update(id, updateCartDto);
            if (!result) {
                throw new common_1.NotFoundException();
            }
            const updatedCart = await this.cartRepository.findOne({ where: { id } });
            return {
                message: 'success',
                data: updatedCart,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async remove(id) {
        try {
            const result = await this.cartRepository.delete(id);
            if (!result) {
                throw new common_1.NotFoundException();
            }
            return {
                message: 'success',
                data: result,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cart_entity_1.Cart)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map