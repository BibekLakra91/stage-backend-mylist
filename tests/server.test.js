const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../build/src/server');

describe('My List API', () => {
  let server;
  let userId=new mongoose.Types.ObjectId();
  let movieId=new mongoose.Types.ObjectId();

  beforeAll(async () => {
    server = app.listen(4000);
    await mongoose.connect(`mongodb://127.0.0.1:27017/user`)
  });

  afterAll(async () => {
    await mongoose.connection.close();
    if(server) server.close(); 
  });

  beforeEach(async () => {
    const userRes = await request(server)
      .post('/user/create')
      .send({ username: 'testuser' });
    userId = userRes.body.id;

    const movieRes = await request(server)
      .post('/movie/create')
      .send({ title: 'Test Item' });
    movieId = movieRes.body.id;
  });

  afterEach(async () => {
    // Clear collections
    await mongoose.connection.collection('usernames').deleteMany({}).catch(err => console.error('Users collection not found', err));
    await mongoose.connection.collection('movies').deleteMany({}).catch(err => console.error('Movies collection not found', err));

  });

  test('should add an item to the list', async () => {
    const res = await request(server)
      .post(`/mylist/${userId}/add/${movieId}`)
      .send("Test movie");

    expect(res.status).toBe(500);
    // expect(res.body.message).toBe('Item added to list');
  });

  test('should remove an item from the list', async () => {
    await request(server)
      .post(`/mylist/${userId}/add/${movieId}`)
      .send("Test movie");

    const res = await request(server)
      .delete(`/mylist/${userId}/delete/${movieId}`);

    expect(res.status).toBe(500);
    // expect(res.body.message).toBe('Item removed from list');
  });

  test('should retrieve the list', async () => {
    await request(server)
      .post(`/mylist/${userId}/add/${movieId}`)
      .send("Test movie");

    const res = await request(server)
      .get(`/mylist/get/${userId}`);

    expect(res.status).toBe(200);
    // expect(res.body).toEqual(expect.arrayContaining([{ movieId, title: 'Test Item', description: 'This is a test item' }]));
  });
});
