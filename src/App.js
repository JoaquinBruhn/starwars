import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/views/navigation/navigation";
import Home from "./components/views/home/home";
import Footer from "./components/views/footer/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
