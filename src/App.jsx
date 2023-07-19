import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./pages/components/Navbar/navbar";
import Logo from "/logo.webp";
import { About } from "./pages/about/about";
import { Blog } from "./pages/blog/blog";
import { Menu } from "./pages/menu/menu";
// import { Footer } from "./pages/components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar navLinks={["Home", "Menu", "Blog", "About"]} logo={Logo} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
