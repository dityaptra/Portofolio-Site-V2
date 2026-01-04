import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-100 dark:bg-lime-900/20 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              Siap memulai <br />
              <span className="text-emerald-600 dark:text-emerald-400">Proyek Baru?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan web,
              desain produk, atau sekadar peluang kemitraan.
            </p>

            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 mb-2">
              <FaEnvelope className="text-emerald-500" />
              <span>email@anda.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <FaMapMarkerAlt className="text-emerald-500" />
              <span>Bali, Indonesia</span>
            </div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300"
          >
            <div className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject Field (NEW) */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                  placeholder="Project Inquiry..."
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                  placeholder="Enter the message..."
                ></textarea>
              </div>

              <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 flex justify-center items-center gap-2 group cursor-pointer">
                Send Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}