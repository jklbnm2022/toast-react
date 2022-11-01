import "./App.css";
import EditorPage from "./pages/Editor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewerPage from "./pages/Viewer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/view">
          <ViewerPage />
        </Route>

        <Route path="/edit">
          <EditorPage />
        </Route>

        <Route path="/">
          <ViewerPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
