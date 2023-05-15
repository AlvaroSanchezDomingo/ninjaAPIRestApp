const isValidUser = (user) => {
  try {
    if (!user.hasOwnProperty('id')) {
      return false;
    }
    if (!user.hasOwnProperty('name')) {
      return false;
    }
    if (!user.hasOwnProperty('email')) {
      return false;
    }
    if (!user.hasOwnProperty('birthDate')) {
      return false;
    }
    if (!user.hasOwnProperty('address')) {
      return false;
    }
    if (!user.address.hasOwnProperty('id')) {
      return false;
    }
    if (!user.address.hasOwnProperty('street')) {
      return false;
    }
    if (!user.address.hasOwnProperty('state')) {
      return false;
    }
    if (!user.address.hasOwnProperty('city')) {
      return false;
    }
    if (!user.address.hasOwnProperty('country')) {
      return false;
    }
    if (!user.address.hasOwnProperty('zip')) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
module.exports = {
  isValidUser: isValidUser,
};
