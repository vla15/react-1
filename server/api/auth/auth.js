import UserModel from '../users/user.model';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';

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
    } else if (!user.authenticate) {
      res.status(401).send('Incorrect password')
    } else {
      req.user = user;
      next();
    }
  })
  .catch(err => next(err));
}