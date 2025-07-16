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
exports.RefundController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const refund_service_1 = require("./refund.service");
const create_refund_dto_1 = require("./dto/create-refund.dto");
const update_refund_dto_1 = require("./dto/update-refund.dto");
let RefundController = class RefundController {
    refundService;
    constructor(refundService) {
        this.refundService = refundService;
    }
    create(createRefundDto) {
        return this.refundService.create(createRefundDto);
    }
    findAll() {
        return this.refundService.findAll();
    }
    findOne(id) {
        return this.refundService.findOne(id);
    }
    update(updateRefundDto) {
        return this.refundService.update(updateRefundDto.id, updateRefundDto);
    }
    remove(id) {
        return this.refundService.remove(id);
    }
};
exports.RefundController = RefundController;
__decorate([
    (0, microservices_1.MessagePattern)('createRefund'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_dto_1.CreateRefundDto]),
    __metadata("design:returntype", void 0)
], RefundController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllRefund'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RefundController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneRefund'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RefundController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateRefund'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_refund_dto_1.UpdateRefundDto]),
    __metadata("design:returntype", void 0)
], RefundController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeRefund'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RefundController.prototype, "remove", null);
exports.RefundController = RefundController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [refund_service_1.RefundService])
], RefundController);
//# sourceMappingURL=refund.controller.js.map