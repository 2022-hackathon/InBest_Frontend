import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";
import Modal from "../components/Modal";
import { BiMenu } from "react-icons/bi";

export default function MyPage() {
  document.body.style.overflow = "unset";
  const [modal, setModal] = useRecoilState(modalState);
  console.log(modal);
  return (
    <StyledMyPage>
      <AddBoard onClick={() => setModal(true)}>
        <div className="adddiv">
          <p className="addp">User님의 주식 투자는 어떤가요? </p>
        </div>
      </AddBoard>
      <ContentList>
        <div className="title">
          <span>제목입니다</span>
          <BiMenu className="menu" />
        </div>
        <div className="content">
          <p>
            wadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaawadwadawdwadwaaaaaaaaaaaaaaaaaaaav
          </p>
        </div>
      </ContentList>
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
