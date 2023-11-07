import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/sobre";
import Registro from "./pages/Registro";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
