import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Checkout from "./pages/Checkout";
import MyBookings from "./pages/MyBookings";
import AboutSafety from "./pages/AboutSafety";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/about-safety" element={<AboutSafety />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
