import styled from "styled-components";
import talk from "../assets/img/intro/talk.svg";

export default function IntroPage() {
  return (
    <Container>
      <Header>
        <h2>LOGO</h2>
        <RouteBoutton>
          <button>로그인</button>
          <button>회원가입</button>
        </RouteBoutton>
      </Header>
      <Section>
        <h1>빠르게 변하는 투자 데이터를 한 눈에,</h1>
        <p>
          빠르게 변하는 투자 데이터를 LOGO와 함께 한 눈에 손쉽게 확인해보세요.
        </p>
        <p>
          개인 투자자의 데이터 기반 투자를 위해 여러 투자 데이터와 주식 정보를
          제공해드립니다.
        </p>
        <button>데이터 보러가기</button>
      </Section>
      <img src={talk} alt="" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f4f7ff;
  button {
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  img {
    position: absolute;
    bottom: 20px;
    width: 50%;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 34px;
  }
`;

const RouteBoutton = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  button {
    width: 150px;
    &:first-child {
      margin-left: -20px;
      color: #fff;
      background: #5c7cfa;
    }
    &:last-child {
      color: #5c7cfa;
      background: #fff;
    }
  }
`;

const Section = styled.div`
  text-align: center;
  margin-top: -270px;
  h1 {
    font-size: 44px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
  button {
    width: 160px;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #5c7cfa;
  }
`;
