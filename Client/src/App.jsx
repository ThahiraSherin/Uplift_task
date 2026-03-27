import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Booking from "./pages/Booking";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;