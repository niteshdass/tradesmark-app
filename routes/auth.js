const express = require("express");
const router = express.Router();
const uploadMulter = require('../middlewares/upload.js')
const validation = require('../middlewares/validation.js')
const {
    signup,
    signin,
    signout,
    requireSignin,
    contact
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", uploadMulter , signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/contact", contact);

module.exports = router;