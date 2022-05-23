const router = require('express').Router();
const categoryRouter = require('./category');
const loginRouter = require('./login/index');
const userRouter = require('./user');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;