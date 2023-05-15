const request = require('supertest');
const app = require('../src/app');
const Users = require('../src/models/user_model');
const { userOne, userTwo, userThree } = require('./fixtures/fixtures');

beforeEach(async function () {
  Users.removeAllUsers();
  await request(app).post('/users/createUsers').send({ user: userOne });
});

test('Should get users', async () => {
  const response = await request(app).get('/users/getusers').expect(200);
  expect(response.body.length).toEqual(1);
});

test('Should get a user', async () => {
  const response = await request(app)
    .get(`/users/getusersById/${userOne.id}`)
    .expect(200);
  expect(response.body).toEqual(userOne);
});

test('Should create user', async () => {
  await request(app)
    .post('/users/createUsers')
    .send({ user: userTwo })
    .expect(201);
  const response = await request(app)
    .get(`/users/getusersById/${userTwo.id}`)
    .expect(200);
  expect(response.body.id).toEqual(userTwo.id);
});

test('Should delete user', async () => {
  await request(app).get(`/users/getusersById/${userOne.id}`).expect(200);

  await request(app).delete(`/users/deleteUsersById/${userOne.id}`).expect(200);

  await request(app).get(`/users/getusersById/${userOne.id}`).expect(404);
});

test('Should update field in user', async () => {
  await request(app)
    .patch(`/users/updateUsersById/${userOne.id}`)
    .send({ user: { name: userTwo.name } })
    .expect(201);
  const response = await request(app)
    .get(`/users/getusersById/${userOne.id}`)
    .expect(200);
  expect(response.body.name).toEqual(userTwo.name);
});
