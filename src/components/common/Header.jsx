import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h2>
          <a href="/">LOGO</a>
        </h2>
        <Frame>
          <p>
            <a href="/">투자 정보 페이지</a>
          </p>
          <p>
            <a href="/mypage">마이 페이지</a>
          </p>
          <p>
            <a href="/game">게임하러가기</a>
          </p>
        </Frame>
        <button>로그아웃</button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  top: 0px;
  position: fixed;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7e98ff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #4263eb;
  }
  h2 {
    color: #fff;
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
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
  }
`;
