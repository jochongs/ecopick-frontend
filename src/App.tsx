import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
