import request from 'supertest';

import { app } from '../../../../app';

describe('List User Repositories Controller', () => {
  it('should return status 200 when provided a proper payload', async () => {
    const response = await request(app).post('/user/repositories')
      .set('Content-type', 'application/json')
      .send({ user: 'JosePaes' });
    expect(response.status).toBe(200);
  });

  it('should return status 404 when provided a not mapped endpoint', async () => {
    await request(app).get('/').expect(404);
  });

  it('should return status 406 when provided a xml body type', async () => {
    await request(app).post('/user/repositories')
      .set('Accept', 'application/xml')
      .send({ user: 'mock' })
      .expect(406);
  });

  it('should return status 400 error without a proper payload', async () => {
    await request(app).post('/user/repositories')
      .set('Content-type', 'application/json')
      .send({})
      .expect(400);
  });

  it('should return error 404 with a nonexistent user', async () => {
    await request(app).post('/user/repositories')
      .set('Content-type', 'application/json')
      .send({ user: 'alabaca' })
      .expect(404);
  });
});
