import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Film from "./pages/film";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Film" element={<Film />}></Route>
      </Routes>
    </>
  );
};

export default App;
