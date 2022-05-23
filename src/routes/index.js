const router = require('express').Router();
const loginRouter = require('./login/index');

router.use('/login', loginRouter);

module.exports = router;