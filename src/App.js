import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/Main";
import MyPage from "./page/MyPage";
import SignUpPage from "./page/SignUpPage";
import LoginPage from "./page/LoginPage";
import CategoryPage from "./page/CategoryPage";
import Game from "./sfdgs4/Game";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<CategoryPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/board" element={<MyPage />} />
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}
