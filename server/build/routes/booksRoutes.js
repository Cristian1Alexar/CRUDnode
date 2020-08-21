"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
class BooksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', booksController_1.default.list);
        this.router.get('/:id', booksController_1.default.getBook);
        this.router.post('/', booksController_1.default.create);
        this.router.delete('/:id', booksController_1.default.delete);
        this.router.put('/:id', booksController_1.default.update);
    }
}
const booksRoutes = new BooksRoutes();
exports.default = booksRoutes.router;
