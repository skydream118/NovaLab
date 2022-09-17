import { BrowserRouter as Router } from "react-router-dom";

import "./assets/styles/App.css";
import RootRoutes from "./routes";

function App() {
  return (
    <Router>
      <RootRoutes />
    </Router>
  );
}

export default App;
