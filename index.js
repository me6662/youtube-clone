const express = require("express"); //require : nodemodule을 어딘가에서 가져오는거 > 여기서는 내 폴더에서 찾으려고 할 것.
const app = express(); // 찾은거니까 express 함수써서 express 객체 생성

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

// const handleListening = () => {
// console.log("seeval yi gun amamdo Lamda sik?");
// }

app.listen(PORT, handleListening); // port Number Listen...

// package.json 를 컨트롤 타워로 만들자
// 시작될때 (npm start)마다 node index.js 실행 되게 만듬 (scripts 사용)
