import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";
import Modal from "../components/Modal";
import { BiMenu } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function MyPage() {
  document.body.style.overflow = "unset";
  const [modal, setModal] = useRecoilState(modalState);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("게시글 가져오기");
    axios
      .get(
        `http://192.168.72.124:8080/getmyboard?id=${localStorage.getItem(
          "id"
        )}&categorie=${localStorage.getItem("cate")}`
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
    <Container>
      <Title>
        <h3>{data["title"]}</h3>
        <BiMenu className="menu" />
      </Title>
      <p>{data["content"]}</p>
    </Container>
  ));
  return (
    <StyledMyPage>
      <Wrapper>
        <Write>
          <Frame>
            <button onClick={() => setModal(true)}>
              User님의 주식 투자는 어떤가요?
            </button>
          </Frame>
        </Write>
        <ContentList>{contents}</ContentList>
        {modal === true ? <Modal /> : null}
      </Wrapper>
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
  button {
    width: 100%;
    height: 38px;
    padding-left: 20px;
    margin-bottom: 16px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    text-align: start;
    background: #ebebeb;
  }
`;
const ContentList = styled.div`
  width: 700px;
  height: 100%;
  margin: 40px 0 60px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f9ff;
  p {
    margin: 16px 0 0;
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  p {
    width: 80%;
    height: 100%;
    padding: 0 0 36px 0;
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
