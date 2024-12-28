import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Loader from "./components/Loader";
import All from "./All";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <>
      {loader ? <Loader /> : <All />}
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/members" element={<Sobay />}></Route>{" "}
          <Route path="/gallery" element={<Gallery />}></Route>{" "}
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
