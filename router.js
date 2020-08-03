import express from "express";

export const userRouter = express.Router();
// (참고) 이렇게 export 하면 named export 가 된다!

// (참고) 실제 Handler Function 을 만들지 않고 익명 함수로 아래처럼 만들 수도 있다.
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
