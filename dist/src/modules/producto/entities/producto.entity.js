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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const pedidoproducto_entity_1 = require("../../pedido/entities/pedidoproducto.entity");
const categoria_entity_1 = require("../../categoria/entities/categoria.entity");
const typeorm_1 = require("typeorm");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Producto.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, (cat) => cat.producto),
    __metadata("design:type", categoria_entity_1.Categoria)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedidoproducto_entity_1.PedidoProducto, pedprod => pedprod.producto),
    __metadata("design:type", Array)
], Producto.prototype, "pedidoProducto", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('productos')
], Producto);
//# sourceMappingURL=producto.entity.js.map