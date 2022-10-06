import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
        <Frame>
          <Link to="/">
            <p>투자 정보 페이지</p>
          </Link>
          <Link to="/mypage">
            <p>마이 페이지</p>
          </Link>
          <Link to="/game">
            <p>게임하러가기</p>
          </Link>
        </Frame>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            document.location.href = "/";
          }}
        >
          로그아웃
        </button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  top: 0px;
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7e98ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fff;
  }
  h2 {
    color: #fff;
    cursor: pointer;
  }

  button {
    width: 120px;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    color: #4263eb;
    background: #fff;
    cursor: pointer;
  }
`;
const Frame = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
`;
