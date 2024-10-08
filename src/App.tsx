import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Browse from "./pages/Browse";

// The app uses a hashrouter, therefore navigating to different routes use /#/Browse or /#/Search
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
