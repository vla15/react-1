import UserModel from '../users/user.model';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';

const checkToken = expressJwt({ secret: 'powerup' });

export const signin = (req, res, next) => {
  // req.user will be tihere from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  const token = signToken(req.user.id);
  res.json({ token: token });
};

export const signToken = id =>
  jwt.sign({ id }, "powerup", { expiresIn: "30d" });

const verifyUser = () => (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(400).send('You need to provide a username and password!')
    return;
  }

  UserModel.findOne({username: username})
  .then(user => {
    if (!user) {
      res.status(400).send('Your username doesn\'t match any record')
    } else if (!user.authenticate(password)) {
      res.status(401).send('Incorrect password')
    } else {
      req.user = user;
      next();
    }
  })
  .catch(err => next(err));
}

export const decodeToken = () => (req, res, next) => {
  if (config.disableAuth) {
    return next();
  }
  // make it optional to place token on query string
  // if it is, place it on the headers where it should be
  // so checkToken can see it. See follow the 'Bearer 034930493' format
  // so checkToken can see it and decode it
  if (req.query && req.query.hasOwnProperty("access_token")) {
    req.headers.authorization = "Bearer " + req.query.access_token;
  }

  // this will call next if token is valid
  // and send error if its not. It will attached
  // the decoded token to req.user
  checkToken(req, res, next);
};

export const getUser = () => (req, res, next) => {
  UserModel.findById(req.user.id)
    .then(user => {
      if (!user) {
        res.status(401).send('Unauthorized')
      } else {
        req.user = user;
        next();
      }
    })
    .catch(err => console.error(err));
}

export const protect = [decodeToken(), getUser()]