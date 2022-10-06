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
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AddBoard = styled.div`
  width: 800px;
  height: 170px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 2px 2px #979797;
  .addp {
    width: 700px;
    margin-top: 20px;
    border-radius: 40px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    border: solid 1px;
    background-color: #ebebeb;
  }
  .adddiv {
    height: 90px;
    border-bottom: 1px solid;
  }
`;
const ContentList = styled.div`
  margin-top: 50px;
  box-shadow: 1px 1px 2px 2px #979797;
  border-radius: 10px;
  width: 800px;
  height: auto;
  .title {
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .title span {
    margin-left: 30px;
  }
  .menu {
    margin-left: 750px;
    position: absolute;
  }
  .content p {
    width: 750px;
    word-break: break-all;
    margin-left: 30px;
    font-size: 18px;
  }
`;
