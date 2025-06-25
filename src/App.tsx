import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage/page";
import MainPage from "./page/MainPage/page";
import StorePage from "./page/StorePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default App;
