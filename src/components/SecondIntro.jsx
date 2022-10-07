import styled from "styled-components";
import background from "../assets/img/intro/background.svg";
import meta from "../assets/img/intro/meta.png";

export default function SecondIntro() {
  return (
    <Container>
      <Title>
        <h1>투자자와</h1>
        <h1>투자자를 잇다</h1>
        <p>여러 투자자들을 메타버스에서 실시간으로 만나보세요.</p>
        <p>실시간으로 대화하며 투자 정보를 공유할 수 있습니다.</p>
      </Title>
      <Image></Image>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 120px;
  h1 {
    margin: 0 0 10px;
    font-size: 66px;
  }
  p {
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 600;
  }
`;

const Image = styled.div`
  position: absolute;
  bottom: 50px;
  right: 30px;
  width: 48%;
  height: 50%;
  background-image: url(${meta});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
