"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.postProduct = exports.getProducts = exports.getProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.default.findByPk(id);
        if (product) {
            return res.status(200).json(product);
        }
        else {
            return res.status(401).json({ message: "Product Not Founded!" });
        }
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});
exports.getProduct = getProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listProducts = yield product_1.default.findAll();
        return res.status(200).json(listProducts);
    }
    catch (error) {
        return res.status(400).json({ message: "No Products Founded!" });
    }
});
exports.getProducts = getProducts;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const product = yield product_1.default.create(body);
        res.status(200).json({ product, message: 'Product Added Successfully!' });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.status(200).json({ message: 'Product Updated Successfully!' });
        }
        else {
            res.status(401).json({ message: `Product ${id} Not Founded}` });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.destroy();
            res.status(200).json({ message: 'Product Deleted Successfully!' });
        }
        else {
            res.status(401).json({ message: `Product ${id} Not Founded}` });
        }
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});
exports.deleteProduct = deleteProduct;
