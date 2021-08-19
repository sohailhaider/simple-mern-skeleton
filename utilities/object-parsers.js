const _ = require("lodash");

const prepareUserForLoginResponse = (user) => {
  let _user = _.cloneDeep(user);
  delete _user.password;
  delete _user.__v;
  return _user;
};
module.exports = {
  prepareUserForLoginResponse,
};
