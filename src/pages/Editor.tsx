import { getSessionStorage } from "../utils/storages/sessionStorages"
import EditorView from "../views/Editor"

const EditorPage = () => {
    const data = getSessionStorage('content') ?? ''

    return <EditorView content={data} />
}

export default EditorPage