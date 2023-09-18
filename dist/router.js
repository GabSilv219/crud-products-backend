"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.json("produtos");
});
// router.get('/', getProducts);
// router.get('/:id', getProduct);
// router.delete('/:id', deleteProduct);
// router.post('/', postProduct);
// router.put('/:id', updateProduct);
exports.default = router;
