import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Junior Web Developer",
    company: "Freelance",
    date: "Dec 2025 - Present",
    description:
      "Mengerjakan proyek freelance pembuatan landing page responsif. Belajar fundamental web development dan membangun portofolio awal dengan proyek-proyek open source.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-emerald-500 pl-4">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Garis Tengah Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex items-center md:justify-between ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-5/12"></div>

                {/* Bulatan di Tengah Timeline */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center z-10 transition-colors duration-300">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>

                {/* Kartu Konten */}
                <div className="ml-12 md:ml-0 w-full md:w-5/12">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-900 transition-all duration-300 relative group">
                    
                    {/* Panah Kecil (Segitiga CSS) */}
                    <div
                      className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 transform rotate-45 transition-colors duration-300 ${
                        idx % 2 === 0
                          ? "-left-2 border-r-0 border-b-0"
                          : "-right-2 border-l-0 border-t-0 border-r border-slate-100 dark:border-slate-700 border-b"
                      }`}
                    ></div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-xs">
                        <FaBriefcase /> {exp.company}
                      </div>

                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 dark:text-slate-500">
                        <FaCalendarAlt /> {exp.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {exp.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}