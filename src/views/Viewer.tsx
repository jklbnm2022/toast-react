import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import { useHistory } from "react-router-dom";

import { Container } from "../components/containers/Container";

const ContentsViewer = ({ contents }: { contents: string }) => {
  const history = useHistory();
  return (
    <Container>
      <h3>toast editor viewer</h3>
      <div style={{ width: "100wv", alignSelf: "flex-start" }}>
        <Viewer initialValue={contents || ""} />
      </div>
      <button onClick={() => history.push("/edit")}>수정</button>
    </Container>
  );
};

// 참고: [하루 기록](https://leego.tistory.com/entry/Toast-UI-Editor-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%A8%EB%B6%80%ED%95%98%EA%B8%B0?category=512184)
export default ContentsViewer;
