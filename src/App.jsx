// import Home from "./pages/home";
// import About from "./pages/about";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import Home from "./pages/home"
import About from "./pages/about";
import Blog from "./pages/blog";
import Menu from "./pages/menu";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="./pages/menu" element={<Menu />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// // import { ReactElement } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/navbar/Navbar";
// // import Home from "./pages/home/Home";
// // import Logo from "./assets/react.svg";

// // // function App(): ReactElement {
// // //   return (
// // //     <Router>
// // //       <Navbar navLinks={["Home", "About"]} logo={Logo} />
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }
