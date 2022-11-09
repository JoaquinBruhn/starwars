import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/views/navigation/navigation";
import Home from "./components/views/home/home";
import Footer from "./components/views/footer/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Galaxy from "./components/views/galaxy/galaxy";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/galaxy" element={<Galaxy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
