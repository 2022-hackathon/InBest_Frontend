import styled from "styled-components";
import background from "../assets/img/background.svg";

export default function SignUpItem({ account, onChangeAccount, onAxios }) {
  return (
    <Container>
      <Image>
        <Wrapper>
          <Frame>
            <h3>LOGO</h3>
            <SignUpBox>
              <h3>회원가입</h3>
              <InputBoX>
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
                    type="text"
                    id="pw"
                    name="pw"
                    value={account.pw}
                    placeholder="비밀번호를 입력해주세요"
                    onChange={onChangeAccount}
                  />
                </Input>
              </InputBoX>
              <button onClick={onAxios}>회원가입</button>
            </SignUpBox>
          </Frame>
        </Wrapper>
      </Image>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bac8ff;
  img {
    width: 100%;
  }
`;

const Image = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background});
`;

const Wrapper = styled.div`
  z-index: 100;
  width: 80vw;
  height: 80vh;
  margin-bottom: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
`;

const Frame = styled.div`
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignUpBox = styled.div`
  width: 300px;
  h3 {
    text-align: center;
    font-size: 26px;
  }
  button {
    width: 100%;
    height: 50px;
    margin-top: 50px;
    border-radius: 6px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #748ffc;
    cursor: pointer;
  }
`;

const InputBoX = styled.div``;

const Input = styled.div`
  input {
    width: 96%;
    height: 30px;
    padding-left: 10px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
  }
`;
