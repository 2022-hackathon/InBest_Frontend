import styled from "styled-components";
import background from "../assets/img/login/background.svg";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  function onSub(e) {
    e.preventDefault();
    const form = {
      id: id,
      pw: pwd,
    };
    axios
      .post("http://192.168.72.124:8080/login", form)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data["token"]);
        localStorage.setItem("id", res.data["id"]);
        document.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container>
      <Wrapper>
        <Route>
          <span><a href = "login">로그인</a></span>
          <span>|</span>
          <span><a href="signup">회원가입</a></span>
        </Route>

        <Section>
          <h2>LOGO</h2>
          <h2>로그인</h2>
          <InputBox onSubmit={onSub}>
            <Input>
              <p>아이디</p>
              <input type="text" onChange={(e) => setId(e.target.value)} />
            </Input>
            <Input>
              <p>비밀번호</p>
              <input type="password" onChange={(e) => setPwd(e.target.value)} />
            </Input>
          </InputBox>
          <button onClick={onSub}>로그인</button>
        </Section>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #91a7ff;
  background-image: url(${background});
  a{
    text-decoration : none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
`;

const Route = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  span {
    font-size: 16px;
    font-weight: 800;
    &:nth-child(1) {
      cursor: pointer;
    }
    &:nth-child(2) {
      padding: 0 5px;
    }
    &:nth-child(3) {
      cursor: pointer;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    width: 100%;
    height: 34px;
    margin-top: 32px;
    border: none;
    border-radius: 4px;
    outline: none;
    color: #fff;
    background: #4263eb;
    cursor: pointer;
  }
`;

const InputBox = styled.form`
  width: 270px;
`;

const Input = styled.div`
  text-align: start;
  p {
    margin: 0 0 6px 0;
    font-size: 14px;
    font: 600;
  }
  input {
    width: 98%;
    height: 34px;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    outline: 1px solid #000;
  }
`;
