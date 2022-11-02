// Toast Editor
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { setSessionStorage } from "../utils/storages/sessionStorages";

import { Container } from "../components/containers/Container";
import uploadImageInS3 from "../utils/aws/s3/uploadImageInS3";

const EditorView = ({ content }: { content: string }) => {
  const editorRef = useRef<Editor>(null);
  const history = useHistory();

  const handleRegisterButton = () => {
    console.log(editorRef.current?.getInstance().getHTML());
    setSessionStorage(
      "content",
      editorRef.current?.getInstance().getHTML() ?? ""
    );
    history.push("/view");
  };
  //   출처: https://curryyou.tistory.com/470 [카레유:티스토리]

  const onUploadImage = async (
    blob: Blob | File,
    callback: (url: string, text?: string) => void
  ) => {
    const url: string = await uploadImageInS3(blob);
    callback(url, "alt text");
    return false;
  };

  return (
    <Container>
      <h3>Editor Toast</h3>
      <Editor
        ref={editorRef}
        initialValue={content}
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        language="ko"
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
      />
      <button onClick={handleRegisterButton}>등록</button>
    </Container>
  );
};

export default EditorView;
