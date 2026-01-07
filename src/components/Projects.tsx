import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Data dummy
const projects = [
  {
    title: "TiketLoka",
    desc: "Aplikasi web dengan desain responsif untuk memesan tiket wisata online.",
    tech: ["Next.js", "Typescript", "Tailwind", "Laravel", "MySQL"],
    image: "/images/projects/tiketloka.png", // Pastikan file ini ada di folder public
    link: "https://www.tiketloka.web.id/",
    github: "https://github.com/dityaptra/TiketLoka-Frontend",
  },
  {
    title: "Raditya Collection",
    desc: "Halaman web informatif dengan SEO yang kuat untuk jasa lobang dan pasang kancing.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/images/projects/radityacollection.png",
    link: "https://www.radityacollection.web.id/",
    github: "https://github.com/dityaptra/Raditya-Collection-V2",
  },
  {
    title: "Comming Soon",
    desc: "Sedang dalam proses pembuatan.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "/images/image1.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* 1. Image Area */}
              <div className="h-36 relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                {/* PENGGANTI NEXT/IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition hover:-translate-y-2 duration-500"
                />
                <div className="absolute inset-0 transition-colors duration-300"></div>
              </div>

              {/* 2. Content Area */}
              <div className="p-4 flex flex-col grow">
                {/* Header: Title + Actions */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Action Icons */}
                  <div className="flex gap-2 shrink-0 ml-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md"
                      title="GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors p-1 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-md"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}