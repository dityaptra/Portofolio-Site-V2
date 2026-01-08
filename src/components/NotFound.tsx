import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300 px-4">
      
      {/* Background Blobs (Sama seperti Contact agar konsisten) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-100 dark:bg-lime-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-lg w-full text-center"
      >
        {/* Text Content */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-800 dark:text-white mb-2 tracking-tight">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-4">
          Not Found
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
          Maaf, konten tidak ada atau sedang <br className="hidden md:block" /> 
          dalam pengembangan.
        </p>

        {/* Action Button */}
        <a 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 transition-all"
        >
          <FaArrowLeft />
          Kembali ke Beranda
        </a>

      </motion.div>
    </section>
  );
}