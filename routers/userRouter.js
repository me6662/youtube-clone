import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controller/userController";

//export const userRouter = express.Router();
// (참고) 이렇게 export 하면 named export 가 된다!

const userRouter = express.Router();

//userRouter.get("/", users);

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
