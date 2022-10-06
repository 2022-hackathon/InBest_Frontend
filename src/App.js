import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Modal from "./components/Modal";
import Home from "./page/Home";
import MyPage from "./page/MyPage";
import SignUpPage from "./page/SignUpPage";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/test" element={<Modal />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        
      </Routes>
    </>
  );
}
