import { Router } from 'express';

import { ListUserRepositoriesController } from '../modules/User/UseCases/ListRepositories/ListUserRepositoriesController';

const usersRoutes = Router();

const listUserRepositoriesController = new ListUserRepositoriesController();

usersRoutes.post('/repositories', listUserRepositoriesController.handle);

export { usersRoutes };
