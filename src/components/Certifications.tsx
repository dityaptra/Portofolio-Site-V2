import { motion } from "framer-motion";
import { FaAward, FaBuilding, FaCalendarAlt, FaEye } from "react-icons/fa";

const certifications = [
  {
    title: "Java (Basic) - HackerRank",
    issuer: "HackerRank",
    date: "Jan 2025",
    link: "/certificates/java_basic.pdf",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100", 
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-10 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-emerald-500 pl-4">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Garis atas berwarna */}
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  cert.color.replace("text", "bg").split(" ")[0]
                }`}
              ></div>

              <div className="grow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${cert.color} bg-opacity-20 dark:bg-opacity-10`}>
                    <FaAward className="text-2xl" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <FaCalendarAlt /> {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 w-full mt-auto">
                  <FaBuilding className="text-slate-400 dark:text-slate-500" />
                  <span>{cert.issuer}</span>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Lihat Sertifikat"
                    className="ml-auto text-slate-400 hover:text-emerald-600 dark:text-slate-500 dark:hover:text-emerald-400 transition-all hover:scale-110 p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-slate-700"
                  >
                    <FaEye className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}