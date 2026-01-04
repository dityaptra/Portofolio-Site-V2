import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* Hapus Navbar dari sini, karena sudah ada di dalam Home.tsx */}
      <div className="antialiased min-h-screen dark:bg-slate-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;