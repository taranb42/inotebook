import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Register from "./component/Register";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Faq from "./component/Faq.js";

function App() {
  return (
    <>
      <noteState>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Navbar /> <Home /> <Footer />{" "}
                </>
              }
            />
            <Route exact path="/Register" element={<Register />} />
            <Route
              path="/About"
              element={
                <>
                  {" "}
                  <Navbar /> <About /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/Home"
              element={
                <>
                  {" "}
                  <Navbar /> <Home /> <Footer />{" "}
                </>
              }
            />
            <Route
              path="/Faq"
              element={
                <>
                  {" "}
                  <Navbar /> <Faq /> <Footer />{" "}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </noteState>
    </>
  );
}

export default App;
