/* const productController = {}

productController.showProducts = (req, res) => {
    res.send('Listar productos');
  }

export default productController;
 */

const showProducts = (req, res) => {
  res.send('Listar productos');
};

const getOne = (req, res) => {
  res.send('El producto encontrado');
};

const createProduct = (req, res) => {
  res.send('se creó el producto');
};

const updateProduct = (req, res) => {
  res.send('se actualizó el producto');
};

const deleteProduct = (req, res) => {
  res.send('se borró el producto');
};

export { showProducts, getOne, createProduct, deleteProduct, updateProduct };
