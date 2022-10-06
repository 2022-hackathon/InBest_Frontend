import { Route, Routes } from "react-router-dom";
import MyPage from "./page/MyPage";
import SignUpPage from "./page/SignUpPage";
import LoginPage from "./page/LoginPage";
import CategoryPage from "./page/CategoryPage";
import Header from "./components/common/Header";
import Game from "./page/Game";
import IntroPage from "./page/IntroPage";
import Main from "./components/Main";
import ApChart from "./components/ApChart";
export default function App() {
  return (
    <>
      {localStorage.getItem("token") === null ? null : <Header />}
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("token") === null ? <IntroPage /> : <Main />
          }
        ></Route>
        <Route path="/mypage" element={<CategoryPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/board" element={<MyPage />} />
        <Route path="/game" element={<Game />}></Route>
        <Route path="/chart" element={<ApChart />}></Route>
      </Routes>
    </>
  );
}
