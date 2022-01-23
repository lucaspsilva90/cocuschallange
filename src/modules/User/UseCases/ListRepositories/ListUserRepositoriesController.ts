import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserRepositoriesUseCase } from './ListUserRepositoriesUseCase';

class ListUserRepositoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user } = request.body;

      if (!user) return response.status(400).json({ status: 400, message: 'Please, you need provide a valid user.' });

      const bodyDataType = request.accepts();

      if (bodyDataType.some((body) => body.valueOf() === 'application/xml')) {
        return response.status(406).json({
          status: 406,
          message: 'This API accepts only application/json body requests.',
        });
      }
      const listUserRepositoriesUseCase = container.resolve(ListUserRepositoriesUseCase);
      const data = await listUserRepositoriesUseCase.execute(user);
      return response.status(200).json(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return response.status(error.response.status).json({
        status: error.response.status,
        message: error.message,
      });
    }
  }
}

export { ListUserRepositoriesController };
