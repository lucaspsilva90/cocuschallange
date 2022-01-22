import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserRepositoriesUseCase } from './ListUserRepositoriesUseCase';

class ListUserRepositoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.body;
    try {
      const listUserRepositoriesUseCase = container.resolve(ListUserRepositoriesUseCase);
      const data = await listUserRepositoriesUseCase.execute(user);
      return response.status(200).json(data);
    } catch (error: any) {
      return response.status(error.response.status).json({
        status: error.response.status,
        message: error.message,
      });
    }
  }
}

export { ListUserRepositoriesController };
