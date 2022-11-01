import { getSessionStorage } from "../utils/storages/sessionStorages";
import ContentsViewer from "../views/Viewer";

const ViewerPage = () => {
  const content = getSessionStorage('content') ?? ''

  return <ContentsViewer contents={content} />;
};

export default ViewerPage;
