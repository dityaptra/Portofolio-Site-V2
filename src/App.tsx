import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen dark:bg-slate-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;