import Navbar from "./Navbar";
import Hero from "./Hero";
import TechStack from "./TechStack";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Footer />
    </div>
  );
}
