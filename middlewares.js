import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube-Clone"; // 변수처럼 내가 선언해서 막쓸수 있음.
  //  여기 locals 에 변수를 저장하면 이 변수들을 템플릿에서 사용할수 있음!
  res.locals.routes = routes;
  next();
};
