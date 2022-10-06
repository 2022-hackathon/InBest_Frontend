import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CateState, modalState } from "..";
import Modal from "../components/Modal";
import { BiMenu } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function MyPage() {
  document.body.style.overflow = "unset";
  const [cate, setCate] = useRecoilState(CateState);
  const [modal, setModal] = useRecoilState(modalState);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(cate)
    axios
      .get(
        `http://192.168.72.124:8080/getmyboard?id=${localStorage.getItem(
          "id"
        )}&categorie=${cate}`
      )
      .then((res) => {
        console.log(res.data["data"]);
        setPosts(res.data["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const contents = posts.map((data) => (
    <>
      <div className="title">
        <span>{data["title"]}</span>
        <BiMenu className="menu" />
      </div>
      <div className="content">
        <p>{data["content"]}</p>
      </div>
    </>
  ));
  return (
    <StyledMyPage>
      <AddBoard onClick={() => setModal(true)}>
        <div className="adddiv">
          <p className="addp">User님의 주식 투자는 어떤가요? </p>
        </div>
      </AddBoard>
      <ContentList>{contents}</ContentList>
      {modal === true ? <Modal /> : null}
    </StyledMyPage>
  );
}

const StyledMyPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f9ff;
`;
const Wrapper = styled.div`
  margin-top: 100px;
`;
const Write = styled.div`
  width: 700px;
  height: 170px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
`;
const Frame = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;
  input {
    width: 100%;
    height: 38px;
    padding-left: 20px;
    margin-bottom: 16px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    background: #ebebeb;
  }
`;
const ContentList = styled.div`
  width: 700px;
  height: 450px;
  margin: 40px 0 60px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  p {
    margin: 16px 0 0;
    width: 80%;
  }
`;
const Title = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 28px;
  }
`;
