import productRoutes from '@modules/products/routes/ProductRoutes';
import sessionRoutes from '@modules/users/routes/SessionRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import { Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/products', productRoutes)
routes.use('/users', usersRouter)
routes.use('/session', sessionRoutes)

export default routes;
