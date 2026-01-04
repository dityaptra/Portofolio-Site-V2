import { useState, useEffect } from "react";
// Perhatikan perubahan path dari "@/" menjadi "../"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Komponen-komponen ini belum kita buat di Vite, jadi nanti pasti error merah dulu.
// Biarkan saja, kita akan migrasi satu per satu setelah ini.
import SplashScreen from "../components/SplashScreen"; 
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {/* Logic transisi opacity tetap dipertahankan */}
      <main className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {/* Navbar dipanggil di sini agar ikut efek fade-in setelah loading selesai */}
        <Navbar />
        
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        
        <Footer />
      </main>
    </>
  );
}