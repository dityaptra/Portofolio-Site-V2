import { motion } from "framer-motion";
import { PiBarbellFill } from "react-icons/pi";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
          </div>

          {/* --- Layout Utama --- */}
          {/* 'lg:items-stretch' adalah kunci agar kiri & kanan sama tinggi */}
          <div className="flex flex-col lg:flex-row gap-10 lg:items-stretch">
            
            {/* 1. BAGIAN KIRI: FOTO PROFIL */}
            <div className="w-full lg:w-1/3 relative shrink-0">
              {/* PERBAIKAN DI SINI:
                  1. aspect-[3/4]: Rasio tetap hanya untuk tampilan HP/Tablet.
                  2. lg:aspect-auto: Matikan rasio di layar besar.
                  3. lg:h-full: Paksa tinggi penuh mengikuti konten di kanan.
              */}
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 dark:border-slate-700 relative group">
                <img
                  src="/images/image1.png"
                  alt="Profile Photo"
                  className="absolute inset-0 w-full h-full object-cover transition duration-500"
                />
                <div className="absolute inset-0 duration-300"></div>
              </div>
            </div>

            {/* 2. BAGIAN KANAN: TEKS & QUICK BIO */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              
              {/* Kotak Deskripsi */}
              {/* flex-grow agar mengisi ruang jika kontennya sedikit */}
              <div className="grow text-slate-600 dark:text-slate-300 leading-relaxed text-lg space-y-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
                <p>
                  Hello! I am a Computer Science student focusing on Full Stack
                  Web Development and Artificial Intelligence. I enjoy building
                  web applications and am curious about how to enhance them with
                  AI capabilities.
                </p>
                <p>
                  Currently, I am learning how to integrate AI into web projects
                  and exploring Machine Learning and Deep Learning technologies.
                </p>
              </div>

              {/* Kotak Quick Bio */}
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg space-y-4 bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 relative z-10">
                  Quick Bio
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 relative z-10">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Buleleng, Bali</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                        Education
                      </p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Computer Science</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg shrink-0">
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                        Current Role
                      </p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Student</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
                      <PiBarbellFill className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                        Hobbies
                      </p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Coding & Gym</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- Akhir Layout Utama --- */}
        </motion.div>
      </div>
    </section>
  );
}