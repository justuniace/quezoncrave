import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./pages/components/navbar";
import Logo from "/logo.webp";
import { About } from "./pages/about/about";
import { Blog } from "./pages/blog/blog";
import { Menu } from "./pages/menu/menu";
// import  Food  from "./pages/menu/sections/food"
// import  Beverages  from "./pages/menu/sections/beverages";
// import Dessert  from "./pages/menu/sections/dessert";
// import MenuNav from "./pages/menu/menuNav"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar navLinks={["Home", "Menu", "Blog", "About"]} logo={Logo} />
        {/* <Navbar navLinks={["Home", "Menu", "Blog", "About"]} logo={Logo} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
 
          {/* <Route index element ={<Food />}  />
           <Route path="food" element={<Food />} />
          <Route path="beverages" element={<Beverages />} />
          <Route path="dessert" element={<Dessert />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
