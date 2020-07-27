// const express = require("express"); //require : nodemodule을 어딘가에서 가져오는거 > 여기서는 내 폴더에서 찾으려고 할 것.
import express from "express"; // import 명령 : ES6 부터 사용가능
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express(); // 찾은거니까 express 함수써서 express 객체 생성

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

function handleHome(req, res) {
  // get,post 함수 핸들러는 argument 가 두개임 1. request object , 2. respond object.
  // request object : post 시 user 정보 (아이디 패스워드 등) 같은 것들 포함
  // respond object : server 에서 응답 할 때 사용되는 객체
  res.send("hello 시발놈아"); // 웹사이트처럼 작동하게 해주려면 html css 파일을 send 하면 됨.
}

// ES6 에서 새로 도입된 함수 표현식. (ARROW FUNCTION, 훨씬 보기좋다.)
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser()); // User 로부터 쿠키를 받도록함.
app.use(bodyParser.json()); //User 로부터 json 받을때 이해하도록함.
app.use(bodyParser.urlencoded({ extended: true })); //User 로부터 Html 받을때 이해하도록함.
app.use(helmet()); // NodeJS 보안 기능추가
app.use(morgan("dev")); // Terminal 에 로그남김.

app.get("/", handleHome);

app.get("/profile", handleProfile); // "/profile" 이렇게 route 가 생성 (단순히 객체가 생성된다고 생각하면 될듯) 되고 handler 와 묶임.

app.listen(PORT, handleListening); // port Number Listen...

// package.json 를 컨트롤 타워로 만들자
// 시작될때 (npm start)마다 node index.js 실행 되게 만듬 (scripts 사용)
