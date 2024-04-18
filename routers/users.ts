import express from 'express';
import User from '../models/User';

const usersRouter = express.Router();

usersRouter.post('/', async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    await user.save();
    return res.send(user);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
