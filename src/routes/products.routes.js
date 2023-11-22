import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getOne,
  showProducts,
  updateProduct,
} from '../controllers/products.controllers';
//import { check } from 'express-validator';
import productValidate from '../middlewares/productValidations';
import validateJWT from '../middlewares/validateJWT';
//import productController from '../controllers/products.controllers';

//crear la instancia del router

const router = Router();

//crear mis rutas

router
  .route('/products')
  //.get(productController.showProducts);
  .get(showProducts)
  .post([validateJWT, productValidate], createProduct)
  /* .post(
    [
      check('productName', 'El nombre del producto es obligatorio').notEmpty(),
      check(
        'productName',
        'El nombre del producto debe tener entre 2 a 100 caracteres'
      ).isLength({ min: 2, max: 100 }),
      check('price', 'El precio es obligatorio').notEmpty(),
      check('price').custom((value) => {
        if (value >= 0 && value <= 100) {
          return true;
        } else {
          throw new Error('El precio debe estar entre 0 y 10000');
        }
      }),
    ],
    createProduct
  ); */

router
  .route('/products/:id')
  .get(getOne)
  .put(validateJWT, updateProduct)
  .delete(validateJWT, deleteProduct);

export default router;
