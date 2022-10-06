import styled from "styled-components";
import Header from "./common/Header";
import data from "../assets/img/main/data.png";

export default function Main() {
  return (
    <Container>
      <Header />
      <Banner>
        <Text>
          <p>데이터 기반의</p>
          <p>투자정보를 확인해보세요!</p>
        </Text>
      </Banner>
      <Section>
        <Popular>
          <Title>
            <h3>현재 인기 종목</h3>
            <p>(거래량 순위)</p>
            <button>갱신</button>
          </Title>
          <Div></Div>
        </Popular>
        <Large>
          <Title>
            <h3>대규모 종목</h3>
            <p>(거래량 순위)</p>
            <button>갱신</button>
          </Title>
          <Div></Div>
        </Large>
        <Chart>
          <Title>
            <h3>대규모 종목</h3>
            <p>(거래량 순위)</p>
            <button>갱신</button>
          </Title>
        </Chart>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f9ff;
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  background: #d4dcff;
  background-image: url(${data});
  background-repeat: no-repeat;
  background-position: 86% 70%;
  background-size: 28%;
`;

const Text = styled.div`
  position: absolute;
  top: 44%;
  left: 10%;
  p {
    margin: 0 0;
    font-size: 44px;
    font-weight: 800;
    color: #3f3d56;
    &:first-child {
      margin-bottom: 16px;
    }
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  h3 {
    margin: 0 0;
    font-size: 28px;
  }
  p {
    margin: 0 0;
    font-size: 16px;
    font-size: 800;
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 36px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    background: #5c7cfa;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 400px;
  border: solid 2px #5c7cfa;
  border-radius: 10px;
  background: #fff;
`;
const Popular = styled.div`
  width: 80%;
`;

const Large = styled.div`
  width: 80%;
  margin-top: 100px;
`;

const Chart = styled.div`
  width: 80%;
  margin-top: 100px;
`;
