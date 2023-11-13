/* const productController = {}

productController.showProducts = (req, res) => {
    res.send('Listar productos');
  }

export default productController;
 */

import { validationResult } from 'express-validator';
import Product from '../models/product';

const showProducts = async (req, res) => {
  //res.send('Listar productos');
  try {
    //recuperar un arreglo con los productos de la BD
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch {
    res.status(404).json({ message: 'Error searching for requested products' });
  }
};

const getOne = async (req, res) => {
  //res.send('El producto encontrado');
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const productFound = await Product.findById(id);
    res.status(200).json(productFound);
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

const createProduct = async (req, res) => {
  //res.send('se creó el producto');
  const { productName, price, urlImg, category } = req.body;

  try {
    //console.log(req.body);
    //validar
    /*  const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({ 
        errors: result.array() //devuelve la lista de errores 
      });
    } */

   

    //crear un objeto para guardarlo en la BD
    const newProduct = new Product({
      /*  productName: req.body.productName,
      price: req.body.price,
      urlImg: req.body.urlImg,
      category: req.body.category */
      productName,
      price,
      urlImg,
      category,
    });

    //guardar en la BD
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product' + error });
  }
};

const updateProduct = async (req, res) => {
  //res.send('se actualizó el producto');
  try {
    //busque el producto por su id en la BD y lo actualice
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Product successfully updated' });
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

const deleteProduct = async (req, res) => {
  // res.send('se borró el producto');
  try {
    //busque el producto por su id en la BD y lo borre
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

export { showProducts, getOne, createProduct, deleteProduct, updateProduct };
