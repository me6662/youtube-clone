import app from "./app"; // default export - import
import { seevalnom } from "./app"; // named export - import

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
  console.log(seevalnom);
};
app.listen(PORT, handleListening);
