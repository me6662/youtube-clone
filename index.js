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
  //console.log(req);
  res.send("hello 시발놈아"); // 웹사이트처럼 작동하게 해주려면 html css 파일을 send 하면 됨.
}

// ES6 에서 새로 도입된 함수 표현식. (ARROW FUNCTION, 훨씬 보기좋다.)
const handleProfile = (req, res) => res.send("You are on my profile");

// Middleware 만들기 (request 와 응답 사이의 과정)
const betweenHome = (req, res, next) => {
  console.log("Between");
  next(); // 다음을 진행하라는 소리.
};

const betweenTest = (req, res, next) => {
  console.log("I only test middleware procedure.");
  next();
};

//app.get("/", betweenHome, handleHome); // "/" 는 home url 주소. , 브라우저가 get 함수를 실행했으므로 (user 요청) 응답해야됨.
// betweenHome 은 request 와 respond 사이에 껴있음. 오직 "/" route 에만 작용.

app.use(morgan("dev"));
app.use(helmet());

/* Middle ware 가 연결을 끊는법
middleware 가 get 전에 응답을 해버리면 연결이 성사가 안됨.
*/

const middleware = (req, res, next) => {
  res.send("not happnening. by MW.");
};

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile); // "/profile" 이렇게 route 가 생성 (단순히 객체가 생성된다고 생각하면 될듯) 되고 handler 와 묶임.

app.listen(PORT, handleListening); // port Number Listen...

// package.json 를 컨트롤 타워로 만들자
// 시작될때 (npm start)마다 node index.js 실행 되게 만듬 (scripts 사용)
