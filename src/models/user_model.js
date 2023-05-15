//User model
const fs = require('fs');

const getusers = () => {
  const users = load();
  return users;
};

const createUsers = async (user) => {
  const users = load();
  const duplicateUser = users.find((u) => u.id === user.id);
  if (duplicateUser) {
    throw new Error('User Id already exists');
  }
  users.push(user);
  save(users);
};

const getusersById = (userId) => {
  const users = load();
  const foundUser = users.find((user) => user.id == userId);
  if (!foundUser) {
    return null;
  }
  return foundUser;
};

const updateUsersById = (userId, userToUpdate) => {
  const users = load();
  let updatedUser;
  const updatedUsers = users.map((user) => {
    if (user.id == userId) {
      updatedUser = {
        ...user,
        ...userToUpdate,
      };
      return updatedUser;
    }
    return user;
  });
  if (updatedUser) {
    save(updatedUsers);
  }

  return updatedUser;
};

const deleteUsersById = (userId) => {
  const users = load();
  const usersToKeep = users.filter((user) => user.id != userId);

  if (users.length > usersToKeep.length) {
    save(usersToKeep);
    return true;
  }
  return false;
};

const save = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync('db/users.json', dataJSON);
};

const load = () => {
  try {
    const dataBuffer = fs.readFileSync('db/users.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeAllUsers = () => {
  save([]);
};

module.exports = {
  getusers: getusers,
  createUsers: createUsers,
  getusersById: getusersById,
  updateUsersById: updateUsersById,
  deleteUsersById: deleteUsersById,
  removeAllUsers: removeAllUsers,
};
