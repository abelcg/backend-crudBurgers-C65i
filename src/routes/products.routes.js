import { Router } from 'express';
import { createProduct, deleteProduct, getOne, showProducts, updateProduct } from '../controllers/products.controllers';
//import productController from '../controllers/products.controllers';

//crear la instancia del router

const router = Router();

//crear mis rutas

router
.route('/products')
//.get(productController.showProducts);
.get(showProducts)
.post(createProduct);


router
.route('/products/:id')
.get(getOne)
.put(updateProduct)
.delete(deleteProduct)



export default router;
