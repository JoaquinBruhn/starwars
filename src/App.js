import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Footer from "./components/views/footer/footer";
import "./App.css";

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
