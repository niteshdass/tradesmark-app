const express = require("express");
const router = express.Router();
const uploadMulter = require('../middlewares/upload.js')
const validation = require('../middlewares/validation.js')

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch,
    orderCreate,
    orderpackCreate,mypackage,packRead,packorderRead,orderDelete
 
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.post("/product/create", create);



router.post("/order/create", uploadMulter, orderCreate);
router.post("/orderpack/create", orderpackCreate);
router.post("/package/mypackage", mypackage);

router.get('/order/:Id', read);
router.get('/pack/:Id', packRead);
router.get('/packorder/:Id/:pack_id', packorderRead);

router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);
router.delete("/orderdelete/:Id",orderDelete)

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;