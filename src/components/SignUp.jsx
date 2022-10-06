import background from "../assets/img/signUp/background.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignUp({ account, onChangeAccount, onAxios }) {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <h3>LOGO</h3>
        </Link>
        <Route>
          <Link to="/login">
            <span>로그인</span>
          </Link>

          <span>|</span>
          <Link to="signup">
            <span>회원가입</span>
          </Link>
        </Route>
        <Section>
          <h2>LOGO</h2>
          <h2>회원가입</h2>
          <InputBox>
            <Input>
              <p>닉네임</p>
              <input
                type="text"
                id="nickName"
                name="nickName"
                value={account.nickName}
                placeholder="닉네임을 입력해주세요"
                onChange={onChangeAccount}
              />
            </Input>
            <Input>
              <p>아이디</p>
              <input
                type="text"
                id="id"
                name="id"
                value={account.id}
                placeholder="아이디를 입력해주세요"
                onChange={onChangeAccount}
              />
            </Input>
            <Input>
              <p>비밀번호</p>
              <input
                type="password"
                id="pw"
                name="pw"
                value={account.pw}
                placeholder="비밀번호를 입력해주세요"
                onChange={onChangeAccount}
              />
            </Input>
          </InputBox>
          <button onClick={onAxios}>회원가입</button>
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
  background: #bac8ff;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0 0;
  }
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
    background: #748ffc;
    cursor: pointer;
  }
`;

const InputBox = styled.div`
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
