// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import FilterdItems from "./components/FilteredItems/FilterdItems";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/filters" element={<FilterdItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
