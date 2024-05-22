import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';


jest.setTimeout(30000);
beforeAll(async () => {
  // await mongoose.connection.close();
  await mongoose.connect('mongodb://localhost:27017/myListDB');
});

afterAll(async () => {
  // await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('My List API', () => {
  it('should add an item to the list', async () => {
    const response = await request(app)
      .post('/list/add')
      .send({ userId: '60df60e6f1b9b8c912d6c1e2', itemId: '456', itemType: 'Movie' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Item added to list');
  });

  it('should remove an item from the list', async () => {
    await request(app)
      .post('/list/add')
      .send({ userId: '60df60e6f1b9b8c912d6c1e2', itemId: '456', itemType: 'Movie' });

    const response = await request(app)
      .post('/list/remove')
      .send({ userId: '60df60e6f1b9b8c912d6c1e2', itemId: '456' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Item removed from list');
  });

  it('should list items', async () => {
    await request(app)
      .post('/list/add')
      .send({ userId: '60df60e6f1b9b8c912d6c1e2', itemId: '456', itemType: 'Movie' });

    const response = await request(app)
      .get('/list/60df60e6f1b9b8c912d6c1e2')
      .query({ page: 1, limit: 10 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].itemId).toBe('456');
  });
});
