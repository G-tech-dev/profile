import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaChartLine,
  FaWallet,
  FaBus,
} from 'react-icons/fa'

const Projects = () => {
  const [visible, setVisible] = useState(false)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Only include projects and repository links that are known to exist.
  const projects = [
    {
      id: 1,
      title: 'Roulette Even/Odd Tracker',
      shortDesc: 'A local-first Microsoft Edge extension for recording roulette results.',
      fullDesc: 'Tracks European or American roulette outcomes and displays historical even, odd, and zero counts and frequencies. It is a history tool, not a reliable prediction or betting system.',
      tech: ['Microsoft Edge Extension', 'Manifest V3', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/G-tech-dev/Rwanda-Stock',
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      category: 'Browser Extension',
    },
    {
      id: 2,
      title: 'SwiftPay — Digital Wallet',
      shortDesc: 'A full-stack digital wallet and payment platform.',
      fullDesc: 'Includes customer and admin workflows for account registration, wallet balances, transaction history, deposit requests, withdrawal requests, and user-to-user transfers.',
      tech: ['Next.js 14', 'TypeScript', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
      github: 'https://github.com/G-tech-dev/SwiftPay',
      icon: <FaWallet className="text-3xl text-blue-400" />,
      category: 'Fintech / Full-Stack',
    },
    {
      id: 3,
      title: 'Vehicle Rental System',
      shortDesc: 'A web application concept for managing vehicle rentals and reservations.',
      fullDesc: 'The repository describes customer and vehicle management, reservation and rental tracking, return processing, dashboard statistics, and authentication.',
      tech: ['React', 'Express', 'MongoDB'],
      github: 'https://github.com/G-tech-dev/sample',
      icon: <FaBus className="text-3xl text-blue-400" />,
      category: 'Full-Stack Web App',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            Featured projects
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-4">Projects and repositories</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <button
                type="button"
                aria-expanded={expandedId === project.id}
                aria-controls={`project-details-${project.id}`}
                className="w-full text-left p-5 cursor-pointer flex justify-between items-center group gap-4"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="flex items-center gap-3">
                  {project.icon}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.shortDesc}</p>
                    <span className="inline-block mt-1 text-xs bg-gray-800 px-2 py-0.5 rounded-full text-blue-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                <span className="text-blue-400 transition-transform duration-200 group-hover:scale-110" aria-hidden="true">
                  {expandedId === project.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {expandedId === project.id && (
                <div id={`project-details-${project.id}`} className="px-5 pb-5 pt-2 border-t border-gray-700/50 animate-fadeIn">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{project.fullDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 px-2 py-1 rounded-full text-purple-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition"
                  >
                    <FaGithub /> View repository <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Projects
