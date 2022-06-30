const router = require("express").Router();
const { register, loginUser, logoutUser, getAllUsers, getUserById } = require("../controllers/users.controller");
const { isAuthenticatedApiFetcher, isAuthenticatedUser, isAdmin } = require("../middleware/authentication");

// register, login, & logout users routes
router.route("/auth/register").post(isAuthenticatedApiFetcher, register);
router.route("/auth/login").post(isAuthenticatedApiFetcher, loginUser);
router.route("/auth/logout").post(isAuthenticatedApiFetcher, logoutUser);

// get all, delete & update users routes
router.route("/user/all").get(isAuthenticatedApiFetcher, isAdmin, getAllUsers);
router.route("/user/:id").get(isAuthenticatedApiFetcher, isAuthenticatedUser, getUserById);

// router.route("/user/update-account").put();
// router.route("/user/delete-account").delete();

// router.route("/auth/change-password").post();
// router.route("/auth/forgot-password").post();
// router.route("/auth/verify-account").post();

module.exports = router;
