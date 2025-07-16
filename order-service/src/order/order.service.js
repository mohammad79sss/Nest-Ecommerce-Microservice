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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../order/entities/order.entity");
const typeorm_2 = require("typeorm");
let OrderService = class OrderService {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(createOrderDto) {
        try {
            const order = await this.orderRepository.save(createOrderDto);
            return {
                message: 'success',
                data: order,
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    async findAll() {
        try {
            const orders = await this.orderRepository.find();
            return {
                message: 'success',
                data: orders,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async findOne(id) {
        try {
            const order = await this.orderRepository.findOne({ where: { id } });
            if (!order) {
                throw new common_1.NotFoundException();
            }
            return {
                message: 'success',
                data: order,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async update(id, updateOrderDto) {
        try {
            const result = await this.orderRepository.update(id, updateOrderDto);
            if (!result) {
                throw new common_1.NotFoundException();
            }
            const updatedOrder = await this.orderRepository.findOne({ where: { id } });
            return {
                message: 'success',
                data: updatedOrder,
            };
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async remove(id) {
        try {
            const result = await this.orderRepository.delete(id);
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
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=order.service.js.map