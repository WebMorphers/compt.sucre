import Home from "./routes/home";
import Menu from "./routes/menu";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />

          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
