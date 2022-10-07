import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { CateModalState, CateState } from "..";
import CategoryModal from "../components/CategoryModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CategoryPage() {
  const navi = useNavigate();
  const [cates, setCates] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("id"));
    axios
      .get("http://192.168.72.124:8080/getmycategorie", {
        params: { id: localStorage.getItem("id") },
      })
      .then((res) => {
        console.log(res.data["data"]);
        setCates(res.data["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const category = cates.map((data) => (
    <Category
      onClick={() => {
        navi("/board");
        localStorage.setItem("cate", data["categorie"]);
      }}
    >
      <Div>
        <span className="title">{data["categorie"]}</span>
      </Div>
      <p>바로가기</p>
    </Category>
  ));
  const [modal, setModal] = useRecoilState(CateModalState);
  return (
    <Container>
      <Wrapper>
        <BtnContainer>
          <button onClick={() => setModal(true)}>카테고리 추가</button>
        </BtnContainer>
        <CategoryList>{category}</CategoryList>
        {modal === true ? <CategoryModal /> : null}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: auto;
  button {
    position: absolute;
    top: 110px;
    right: 140px;
    width: 150px;
    height: 46px;
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #4263eb;
    cursor: pointer;
  }
`;

const CategoryList = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Category = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 50px;
  
  .icon {
    position: absolute;
    margin-left: 100px;
    width: 25px;
    height: 25px;
  }
  p {
    margin: 17px 0 0 0;
    text-align: start;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 76%;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bac8ff;
  span {
    font-size: 28px;
    font-weight: 800;
    color: #414760;
  }
`;
