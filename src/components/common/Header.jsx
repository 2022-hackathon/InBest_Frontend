import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <h2>LOGO</h2>
        <Frame>
          <button>마이페이지</button>
          <button>게임하러가기</button>
        </Frame>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #91a7ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 88vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    color: #fff;
    font-size: 30px;
  }
`;

const Frame = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;

  button {
    height: 40px;
    font-size: 16px;
    font-weight: 900;
    border-radius: 20px;
    border: none;
    outline: none;
    &:first-child {
      width: 120px;
      border: 2px solid #5c7cfa;
      color: #5c7cfa;
      background: #fff;
    }
    &:last-child {
      width: 140px;
      background: #5c7cfa;
      color: #fff;
    }
  }
`;
