import UserModel from './user.model';

export const signup = (req, res, next) => {
  let body = req.body;
  UserModel.findOne({email: body.email})
    .then(user => {
      if (user) {
        res.status(401).send('A user with that email already exists in the system')
      }
    })
    .then(() => {
      let createdUser = new UserModel({
        first: body.first,
        last: body.last,
        email: body.email,
        passwordHash: body.password
      })
      createdUser.hashPassword(body.password);
      createdUser.save()
    })
    .then(success => res.status(201).send('User created'))
    .catch(err => console.error(err));
}
