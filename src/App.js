import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Register from "./component/Register";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Faq from "./component/Faq.js";
import Projects from "./component/Projects";
import Login from "./component/Login";
import { HomeContext } from "./services/HomeContext";

function App() {
  return (
    <>
      <noteState>
        <HomeContext>
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
            ````````````````````
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
            <Route exact path="/Login" element={<Login />} />            
            <Route
              path="/Projects"
              element={
                <>
                  {" "}
                  <Navbar /> <Projects /> <Footer />{" "}
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
        </HomeContext>
      </noteState>
    </>
  );
}

export default App;
