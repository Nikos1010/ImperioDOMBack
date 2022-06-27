import { Router } from "express";
import { deleteProduct, editProduct, getProduct, getProducts, postAddProduct } from "../controllers/product.js";

const router = Router();

router.get('/products', getProducts);

router.post('/user/addProduct', postAddProduct);

router.put('/user/editProduct/:prodId', editProduct);

router.get('/products/:prodId', getProduct);

router.delete('/user/deleteProduct/:prodId', deleteProduct);

export default router;