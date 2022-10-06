import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/Main"
import MyPage from "./page/MyPage";
import SignUpPage from "./page/SignUpPage";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </>
  );
}