import { check } from 'express-validator';
import validationsResults from '../helpers/validationsResults';


const productValidate = [
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

    (req, res, next)=>{
       validationsResults(req, res, next) 
    }
  ]


  export default productValidate; 
