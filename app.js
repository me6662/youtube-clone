// const express = require("express"); //require : nodemodule을 어딘가에서 가져오는거 > 여기서는 내 폴더에서 찾으려고 할 것.
import express from "express"; // import 명령 : ES6 부터 사용가능
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express(); // 찾은거니까 express 함수써서 express 객체 생성

app.use(helmet()); // NodeJS 보안 기능추가
app.set("view engine", "pug");
app.use(cookieParser()); // User 로부터 쿠키를 받도록함.
app.use(bodyParser.json()); //User 로부터 json 받을때 이해하도록함.
app.use(bodyParser.urlencoded({ extended: true })); //User 로부터 Html 받을때 이해하도록함.
app.use(morgan("dev")); // Terminal 에 로그남김. (development 모드)
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 누군가가 내 파일을 불러올때 (import) app object 를 주겠다는 말, app object는 위에서 우리가 설정한 것들 (use, get 등)
