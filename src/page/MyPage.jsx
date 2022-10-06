import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "..";
import Modal from "../components/Modal";
import { BiMenu } from "react-icons/bi";
import Header from "../components/common/Header";

export default function MyPage() {
  document.body.style.overflow = "unset";
  const [modal, setModal] = useRecoilState(modalState);
  console.log(modal);
  return (
    <StyledMyPage>
      <Header />
      <Wrapper>
        <Write>
          <Frame>
            <input
              onClick={() => setModal(true)}
              placeholder="User님의 주식 투자는 어떤가요?"
            ></input>
          </Frame>
        </Write>
        <ContentList>
          <Title>
            <h3>제목입니다</h3>
            <BiMenu className="menu" />
          </Title>
          <p>
            벌써 40여 년 전이다. 내가 갓 세간난 지 얼마 안 돼서 의정부에 내려가
            살 때다. 서울 왔다 가는 길에, 청량리역으로 가기 위해 동대문에서 일단
            전차를 내려야 했다. 동대문 맞은편 길가에 앉아서 방망이를 깎아 파는
            노인이 있었다. 방망이를 한 벌 사 가지고 가려고 깎아 달라고 부탁을
            했다. 값을 굉장히 비싸게 부르는 것 같았다. "좀 싸게 해 줄 수
            없습니까?" 했더니, "방망이 하나 가지고 에누리하겠소? 비싸거든 다른
            데 가 사우." 대단히 무뚝뚝한 노인이었다. 값을 흥정하지도 못하고 잘
            깎아나 달라고만 부탁했다. 그는 잠자코 열심히 깎고 있었다. 처음에는
            빨리 깎는 것 같더니, 저물도록 이리 돌려 보고 저리 돌려 보고 굼뜨기
            시작하더니, 마냥 늑장이다. 내가 보기에는 그만하면 다 됐는데, 자꾸만
            더 깎고 있었다. 인제 다 됐으니 그냥 달라고 해도 통 못 들은 척 대꾸가
            없다. 타야 할 차 시간이 빠듯해 왔다. 갑갑하고 지루하고 초조할
            지경이었다. "더 깎지 않아도 좋으니 그만 주십시오." 라고 했더니, 화를
            버럭 내며, "끓을 만큼 끓어야 밥이 되지, 생쌀이 재촉한다고 밥이
            되나." 한다. 나도 기가 막혀서, "살 사람이 좋다는데 무얼 더 깎는다는
            말이오? 노인장, 외고집이시구먼. 차시간이 없다니까요." 노인은
            퉁명스럽게, "다른 데 가서 사우. 난 안 팔겠소." 하고 내뱉는다.
          </p>
        </ContentList>
        {modal === true ? <Modal /> : null}
      </Wrapper>
    </StyledMyPage>
  );
}

const StyledMyPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f7f9ff;
`;
const Wrapper = styled.div`
  margin-top: 100px;
`;
const Write = styled.div`
  width: 700px;
  height: 170px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
`;
const Frame = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;
  input {
    width: 100%;
    height: 38px;
    padding-left: 20px;
    margin-bottom: 16px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: 14px;
    background: #ebebeb;
  }
`;
const ContentList = styled.div`
  width: 700px;
  height: 450px;
  margin: 40px 0 60px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  p {
    margin: 16px 0 0;
    width: 80%;
  }
`;
const Title = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 28px;
  }
`;
