import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h2>LOGO</h2>
        <Frame>
          <p>투자 정보 페이지</p>
          <p>마이 페이지</p>
          <p>게임하러가기</p>
        </Frame>
        <button>로그아웃</button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
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
