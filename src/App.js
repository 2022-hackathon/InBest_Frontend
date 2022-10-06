import { Route, Routes } from "react-router-dom";
import MyPage from "./page/MyPage";
import IntroPage from "./page/IntroPage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import CategoryPage from "./page/CategoryPage";
import MainPage from "./page/MainPage";
import Game from "./page/Game";
<<<<<<< HEAD
import Header from "./components/common/Header";
=======
import IntroPage from "./page/IntroPage";
import Main from "./components/Main";
import ApChart from "./components/ApChart";
>>>>>>> main
export default function App() {
  return (
    <>
      {/* <MainPage /> */}
      {localStorage.getItem("token") === null ? null : <Header />}
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("token") === null ? (
              <IntroPage />
            ) : (
              <MainPage />
            )
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
