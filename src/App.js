import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/views/navigation/navigation";
import Home from "./components/views/home/home";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Galaxy from "./components/views/galaxy/galaxy";
import Profile from "./components/views/profile/profile";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/galaxy" element={<Galaxy />} />
          <Route exact path="/profile/:type/:name" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
