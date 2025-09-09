import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVehicle from "./pages/addAVehicle";
import SearchAndBook from "./pages/search&BookPage";
import Home from "./pages/home";
import BookingSuccess from "./pages/bookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/AddVehicle" element={<AddVehicle />} />
        <Route path="/search&Book" element={<SearchAndBook />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
