import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, postProduct, updateProduct } from './controllers/ProductsController';

const router = Router();

router.get('/products', getProducts);
router.get('/search-product/:id', getProduct);
router.delete('/delete-product/:id', deleteProduct);
router.post('/create-product', postProduct);
router.put('/update-product/:id', updateProduct);

export default router;