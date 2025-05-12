import productRoutes from '@modules/products/routes/ProductRoutes';
import avatarRouter from '@modules/users/routes/AvatarRoutes';
import sessionRoutes from '@modules/users/routes/SessionRoutes';
import usersRouter from '@modules/users/routes/UserRoutes';
import express, { Router } from 'express';
import uploadConfig from '@config/upload';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.use('/products', productRoutes)
routes.use('/users', usersRouter)
routes.use('/session', sessionRoutes)
routes.use('/avatar', avatarRouter)
routes.use('/files', express.static(uploadConfig.directory))

export default routes;
