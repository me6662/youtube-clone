import express from "express";

//export const userRouter = express.Router();
// (참고) 이렇게 export 하면 named export 가 된다!

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("fuck you. start"));
userRouter.get("/fuck1", (req, res) => res.send("fuck you. 1"));
userRouter.get("/fuck2", (req, res) => res.send("fuck you. 2"));
userRouter.get("/fuck3", (req, res) => res.send("fuck you. 3"));

export default userRouter;
