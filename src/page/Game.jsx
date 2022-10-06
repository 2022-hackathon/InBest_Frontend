import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/WebBuild.loader.js",
    dataUrl: "Build/WebBuild.data",
    frameworkUrl: "Build/WebBuild.framework.js",
    codeUrl: "Build/WebBuild.wasm",
  });
  return (
    <Unity
      style={{
        width: "100%",
        height: "auto",
        justifySelf: "center",
        alignSelf: "center",
      }}
      unityProvider={unityProvider}
    />
  );
}

export default Game;
