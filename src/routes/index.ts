import { Router } from 'express';

import { usersRoutes } from './users.routes';

const router = Router();

router.use('/user', usersRoutes);

router.all('*', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Not Found',
  });
});

export { router };
