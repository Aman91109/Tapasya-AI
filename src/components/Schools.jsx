import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import schools from '../data/schools.json'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Schools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="schools" className="section-padding bg-white" aria-label="Partner Schools">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#5B28C6] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Partners
          </p>
          <h2 className="section-heading mb-4">
            Trusted by Schools
            <span className="block purple-gradient-text">Across India</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body mb-6">
            Forward-thinking schools that have partnered with us through a formal MOU,
            bringing AI education to their students.
          </p>
          {/* Counter */}
          <div className="inline-flex items-center gap-3 bg-[#0A1349] text-white rounded-full px-6 py-2.5">
            <span className="w-8 h-8 bg-[#5B28C6] rounded-full flex items-center justify-center font-heading font-bold text-sm">
              {schools.length}
            </span>
            <span className="font-body text-sm font-medium">Partnered Schools and Growing</span>
          </div>
        </motion.div>

        {/* School cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {schools.map((school) => (
            <motion.article
              key={school.id}
              variants={itemVariants}
              className="glossy-card rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#5B28C6]/30 group"
            >
              {/* Logo */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 ring-2 ring-gray-100 group-hover:ring-[#5B28C6]/30 transition-all duration-300">
                <img
                  src={school.schoolLogo}
                  alt={`${school.schoolName} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-[#0A1349] text-base mb-1 leading-tight">
                {school.schoolName}
              </h3>

              {/* Location */}
              <p className="text-gray-500 font-body text-xs mb-3 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {school.location}
              </p>

              {/* MOU Badge */}
              <span className="inline-flex items-center gap-1.5 bg-[#5B28C6]/10 text-[#5B28C6] text-xs font-heading font-semibold px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MOU Partner
              </span>

              {/* Date */}
              <p className="text-gray-400 text-xs font-body mt-2">
                Since {new Date(school.mouSignedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-navy to-purple-dark p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 glossy-stats"
        >
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Is your school ready to join?
            </h3>
            <p className="text-white/70 font-body text-sm">
              Join our growing network of schools shaping India's AI-ready generation.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary flex-shrink-0"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

