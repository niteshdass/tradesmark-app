const express = require('express');
const router = express.Router();

const { create,createPack, categoryById, read, update, remove, list ,packList} = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.post('/category/create', create);
router.post('/package/create',  createPack);
// router.put('/category/:categoryUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);

router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
router.get('/categories', list);
router.get('/packages', packList);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;