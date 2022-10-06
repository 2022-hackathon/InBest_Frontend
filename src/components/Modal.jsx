import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CateState, modalState } from "..";

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [cate, setCate] = useRecoilState(CateState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  document.body.style.overflow = "hidden";
  function onSub(e) {
    e.preventDefault();
    const form = {
      title: title,
      content: content,
      id: localStorage.getItem("id"),
      date: "2022/05/12",
      categorie: cate,
    };
    console.log(form);
    axios
      .post("http://192.168.72.124:8080/addboard", form)
      .then((res) => {
        console.log(res);
        document.location.href = "/board"
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
          <Content onSubmit={onSub}>
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
            <button type="submit">글쓰기</button>
          </Content>
        </Section>
      </Popup>
    </StyledModal>
  );
}
const StyledModal = styled.div`
  box-shadow: 3px 3px 1000px 1000px rgba(0, 0, 0, 0.5);
  top: 190px;
  position: absolute;
  z-index: 2;
  background-color: #ede4cc;
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
