import { Router } from 'express';
import ProductsController from '../controllers/ProductsControler';
import { createProductSchema, idParamsValidation, updateProductSchema } from '../schemas/ProductSchema';

const productRoutes = Router();
const productsController = new ProductsController();

productRoutes.get('/', productsController.index);
productRoutes.get('/:id', idParamsValidation, productsController.show);

productRoutes.post('/', createProductSchema, productsController.create);
productRoutes.put('/:id', updateProductSchema, productsController.update);
productRoutes.delete('/:id', idParamsValidation, productsController.delete);

export default productRoutes;
