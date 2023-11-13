import { validationResult } from 'express-validator';


const validationsResults = (req, res, next) => {
    //validar
    const errors = validationResult(req);
    //pregunta si tengo errores
    if (!errors.isEmpty()) {
      res.status(400).json({ 
        errors: errors.array() //devuelve la lista de errores 
      });
    }
    //le digo que continue con el flujo
    next();
}


export default validationsResults
