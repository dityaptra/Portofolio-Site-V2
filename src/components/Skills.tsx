import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaBrain,
  FaJava,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiGithub,
  SiJavascript,
  SiPython,
  SiPhp,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      { name: "HTML", icon: <SiHtml5 />, color: "text-orange-600" },
      { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-800 dark:text-white" }, // Fix warna icon Next.js di dark mode
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend",
    icon: <FaDatabase />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Laravel", icon: <SiLaravel />, color: "text-red-600" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
    ],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-500" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "text-orange-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-700" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "Python", icon: <SiPython />, color: "text-blue-600" },
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "PHP", icon: <SiPhp />, color: "text-indigo-600" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-600" },
      { name: "GitHub", icon: <SiGithub />, color: "text-black dark:text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-600" },
      { name: "Visual Studio Code", icon: <BiLogoVisualStudio />, color: "text-blue-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Skills & <span className="text-emerald-600 dark:text-emerald-400">Tools</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // Background gradient disesuaikan untuk dark mode
              className="bg-linear-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border-2 border-emerald-500 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 rounded-xl shadow-sm border border-emerald-50 dark:border-slate-600 text-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 cursor-pointer group-hover:border-emerald-200 dark:group-hover:border-emerald-500 group-hover:shadow-md transition-all"
                    >
                      <div className={`text-3xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                    </motion.div>

                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded-md shadow-sm border border-slate-100 dark:border-slate-600 whitespace-nowrap z-10 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}