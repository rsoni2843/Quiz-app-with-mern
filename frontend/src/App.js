import { Box } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Routes/AllRoute";

function App() {
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
// http://localhost:8080/getQuiz?limit=50&difficulty=easy&category=Geography
// https://m15-bck.vercel.app/getQuiz