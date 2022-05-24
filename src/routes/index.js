const router = require('express').Router();
const categoryRouter = require('./category');
const loginRouter = require('./login/index');
const userRouter = require('./user');
const postRouter = require('./post');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;