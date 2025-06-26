import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage/page";
import MainPage from "./page/MainPage/page";
import StorePage from "./page/StorePage";
import MyPage from "./page/MyPage";
import RewardPage from "./page/RewardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/reward" element={<RewardPage />} />
    </Routes>
  );
}

export default App;
