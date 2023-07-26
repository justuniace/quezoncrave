import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./pages/components/Navbar/navbar";
import Logo from "/logo.webp";
import { Blog } from "./pages/about/about";
import PrivacyPolicy from "./pages/components/Footer/privacy";
import { Menu } from "./pages/menu/menu";
import { Footer } from "./pages/components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar navLinks={["Home", "Menu", "Blog"]} logo={Logo} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
