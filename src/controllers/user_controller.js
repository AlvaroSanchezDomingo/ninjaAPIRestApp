const Users = require('../models/user_model');
const Utils = require('../utils/utils');

exports.getusers = async function (req, res) {
  try {
    console.log('getusers');
    const allUsers = Users.getusers();
    res.status(200).send(allUsers);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.createUsers = async function (req, res) {
  try {
    console.log('createUsers');
    if (!req.body.user) {
      return res.status(405).send('Invalid input');
    }
    const user = req.body.user;
    if (!Utils.isValidUser(user)) {
      return res.status(405).send('Invalid input');
    }
    await Users.createUsers(user);
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getusersById = async function (req, res) {
  try {
    console.log('getusersById');
    if (!req.params.userId) {
      return res.status(400).send('Invalid user id');
    }
    const userId = req.params.userId;
    const user = Users.getusersById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.updateUsersById = function (req, res) {
  try {
    console.log('updateUsersById');
    if (!req.params.userId) {
      return res.status(400).send('Invalid user id');
    }
    const userId = req.params.userId;
    const userToUpdate = {
      ...req.body.user,
    };
    const updatedUser = Users.updateUsersById(userId, userToUpdate);
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(201).send(updatedUser);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.deleteUsersById = function (req, res) {
  try {
    console.log('deleteUsersById');
    if (!req.params.userId) {
      return res.status(400).send('Invalid user id');
    }
    const userId = req.params.userId;
    const deleted = Users.deleteUsersById(userId);
    if (!deleted) {
      return res.status(404).send('User not found');
    }
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
};

exports.test = function (req, res) {
  try {
    console.log('test');
    res.status(200).send();
  } catch (e) {
    res.status(400).send();
  }
};
