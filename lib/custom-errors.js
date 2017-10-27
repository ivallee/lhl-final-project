class RecipeNotFound extends Error {
  constructor(id, ...params) {
    super(...params);
    this.status = 404;
    this.message = `Recipe with id ${id} not found`;
  }
}

class InvalidLogin extends Error {
  constructor(...params) {
    super(...params);
    this.status = 401;
    this.message = 'Invalid username or password';
  }
}

class NotLoggedIn extends Error {
  constructor(...params) {
    super(...params);
    this.status = 401;
    this.message = 'Login required';
  }
}

module.exports = { RecipeNotFound, InvalidLogin, NotLoggedIn };