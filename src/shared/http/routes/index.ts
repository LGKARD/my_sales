import productRoutes from '@modules/products/routes/ProductRoutes';
import { Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/products', productRoutes)

export { routes };
