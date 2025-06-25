import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage/page";
import MainPage from "./page/MainPage/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
