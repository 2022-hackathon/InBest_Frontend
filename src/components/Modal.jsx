import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  document.body.style.overflow = "hidden";
  function onSub(e) {
    console.log("게시글 등록")
    e.preventDefault();
    const form = {
      title: title,
      content: content,
      id: localStorage.getItem("id"),
      date: "2022/05/12",
      categorie: localStorage.getItem("cate"),
    };
    console.log(form);
    axios
      .post("http://192.168.72.124:8080/addboard", form)
      .then((res) => {
        console.log(res);
        document.location.href = "/board";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <StyledModal>
      <Popup>
        <Head>
          <p>게시물 작성</p>
          <button
            onClick={() => {
              setModal(false);
              console.log(modal);
            }}
          >
            X
          </button>
        </Head>
        <Section>
          <Content >
            <input
              type="text"
              placeholder="제목을 입력해주세요!"
              className="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows="10"
              cols="25"
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" onClick={onSub}>글쓰기</button>
          </Content>
        </Section>
      </Popup>
    </StyledModal>
  );
}
const StyledModal = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #20202060;
`;

const Head = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }

  button {
    position: absolute;
    top: 14px;
    right: 14px;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #bac8ff;
    color: #4263eb;
    cursor: pointer;
  }
`;

const Section = styled.div``;

const Content = styled.div`
  input {
    width: 600px;
    height: 40px;
    margin-top: 30px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #979797;
    outline: none;
  }
  textarea {
    width: 590px;
    padding: 10px;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid #979797;
    outline: none;
    resize: none;
  }
  button {
    margin-top: 25px;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #4263eb;
    cursor: pointer;
  }
`;

const Popup = styled.div`
  width: 700px;
  height: 450px;
  box-shadow: 1px 1px 2px 2px #979797;
  border-radius: 20px;
  background: #fff;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
