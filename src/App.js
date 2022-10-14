import { useContext } from "react";
import "./App.css";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./components/ThemeContext";
import { DFilm } from "./Share/ListOfFilms";
import { Routes, Route } from 'react-router-dom'
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapper" style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Films films={DFilm}></Films>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
