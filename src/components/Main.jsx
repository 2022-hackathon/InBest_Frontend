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
        <Title>
          <h2>현재 인기 종목</h2>
          <p>00기준을 통해 선정함</p>
          <button>새로고침</button>
        </Title>
      </Section>
      <StyledHome>
        <DesContainer>
          <div>종목명</div>
          <div>현재가</div>
          <div>시가총액</div>
          <div>거래량/거래대금</div>
        </DesContainer>
        <ListContainer>
          <List>
            <div>
              <ListItem>테스트</ListItem>
              <ListItem margin="120px">테스트</ListItem>
              <ListItem margin="125px">테스트</ListItem>
              <ListItem margin="160px">테스트</ListItem>
            </div>
            <div>
              <ListItem>테스트</ListItem>
              <ListItem margin="120px">테스트</ListItem>
              <ListItem margin="125px">테스트</ListItem>
              <ListItem margin="160px">테스트</ListItem>
            </div>
            <div>
              <ListItem>테스트</ListItem>
              <ListItem margin="120px">테스트</ListItem>
              <ListItem margin="125px">테스트</ListItem>
              <ListItem margin="160px">테스트</ListItem>
            </div>
            <div>
              <ListItem>테스트</ListItem>
              <ListItem margin="120px">테스트</ListItem>
              <ListItem margin="125px">테스트</ListItem>
              <ListItem margin="160px">테스트</ListItem>
            </div>
          </List>
        </ListContainer>
      </StyledHome>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #f6f9ff;
`;

const Banner = styled.div`
  position: relative;
  width: 100vw;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 80vw;
  margin-top: 100px;
  text-align: start;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    margin: 0 0;
    font-size: 34px;
  }
  p {
    margin: 10px 0 0 0;
    font-size: 14px;
    font-style: 600;
  }
  button {
    width: 120px;
    height: 40px;

    margin-top: 50px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #4263eb;
    cursor: pointer;
  }
`;

const ListItem = styled.p`
  width: 240px;
  text-align: center;
  margin-left: ${(props) => props.margin || "0px"};
`;
const StyledHome = styled.div`
  margin-top: 100px;
`;
const DesContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  div {
    height: auto;
    line-height: 50px;
  }
`;
const List = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  border: black 1px solid;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    border-bottom: 1px solid;
  }
`;
