import { Unity, useUnityContext } from "react-unity-webgl";
import styled from "styled-components";
function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/WebBuild.loader.js",
    dataUrl: "Build/WebBuild.data",
    frameworkUrl: "Build/WebBuild.framework.js",
    codeUrl: "Build/WebBuild.wasm",
  });
  return (
    <UnityCon>
      <Unity
        style={{
          width: "1296px",
          height: "680px",
          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
    </UnityCon>
  );
}
const UnityCon = styled.div`
margin-top : 70px;
  display: flex;
  justify-content: center;
`;
export default Game;
