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
      <span className="title">{data["categorie"]}</span>
      {/* <p className="content">{}</p> */}
    </Category>
  ));
  const [modal, setModal] = useRecoilState(CateModalState);
  return (
    <Wrapper>
      <BtnContainer>
        <button onClick={() => setModal(true)}>
          카테고리 추가 {<AiOutlinePlus />}
        </button>
      </BtnContainer>
      <CategoryList>{category}</CategoryList>
      {modal === true ? <CategoryModal /> : null}
    </Wrapper>
  );
}
const BtnContainer = styled.div`
  width: 100%;
  height: auto;
  button {
    float: right;
    margin-right: 135px;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid;
  }
`;
const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  border: 1px solid;
  text-align: center;
  width: 400px;
  border-radius: 10px;
  height: 200px;
  margin-top: 50px;
  .title {
    border-bottom: 1px solid;
    height: 30px;
  }
  .content {
    text-align: left;
    padding-left: 20px;
    word-break: break-all;
  }
  .icon {
    position: absolute;
    margin-left: 100px;
    width: 25px;
    height: 25px;
  }
`;
const CategoryList = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
