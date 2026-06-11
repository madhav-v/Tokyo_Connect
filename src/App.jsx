import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveBookings from "./components/LiveBookings";
import Customers from "./components/Customers";
import Offering from "./components/Offering";
import ValueProposition from "./components/ValueProposition";
import CoreCompetencies from "./components/CoreCompetencies";
import People from "./components/People";
import DistinctiveCompetencies from "./components/DistinctiveCompetencies";
import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import AITripMatcher from "./components/AITripMatcher";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveBookings />
      <Customers />
      <Offering />
      <ValueProposition />
      {/* <CoreCompetencies /> */}
      {/* <People /> */}
      {/* <DistinctiveCompetencies /> */}
      <Destinations />
      <Gallery />
      <Testimonials />
      <AITripMatcher />
      <Footer />
    </>
  );
}

export default App;
