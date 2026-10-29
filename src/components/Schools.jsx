import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import schools from '../data/schools.json'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Schools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="schools" className="section-padding relative overflow-hidden" aria-label="Partner Schools">
      {/* Blobs */}
      <div className="blob blob-2 w-[450px] h-[450px] bottom-0 left-[-100px] opacity-35" style={{ animationDelay: '-1s' }} />
      <div className="blob blob-1 w-[350px] h-[350px] top-0 right-[-80px] opacity-25" style={{ animationDelay: '-6s' }} />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Our Partners</p>
          <h2 className="section-heading mb-4">
            Trusted by Schools{' '}
            <span className="water-gradient-text">Across India</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-body text-sm sm:text-base mb-6">
            Forward-thinking schools that have partnered with us through a formal MOU,
            bringing AI education to their students.
          </p>
          {/* Counter badge */}
          <div
            className="inline-flex items-center gap-3 text-white rounded-full px-6 py-2.5"
            style={{
              background: 'rgba(91,40,198,0.2)',
              border: '1px solid rgba(139,92,246,0.3)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #5B28C6, #8B5CF6)' }}
            >
              {schools.length}
            </span>
            <span className="font-body text-sm font-medium text-white/80">Partnered Schools and Growing</span>
          </div>
        </motion.div>

        {/* School Cards */}
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
              className="water-card rounded-2xl p-6 flex flex-col items-center text-center group"
            >
              {/* Logo */}
              <div
                className="w-16 h-16 rounded-2xl overflow-hidden mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={school.schoolLogo}
                  alt={`${school.schoolName} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-white text-base mb-1 leading-tight">
                {school.schoolName}
              </h3>

              {/* Location */}
              <p className="text-white/45 font-body text-xs mb-3 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {school.location}
              </p>

              {/* MOU Badge */}
              <span
                className="inline-flex items-center gap-1.5 text-purple-300 text-xs font-heading font-semibold px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(139,92,246,0.25)',
                }}
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                MOU Partner
              </span>

              {/* Date */}
              <p className="text-white/30 text-xs font-body mt-2">
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
          className="mt-16 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(91,40,198,0.25) 0%, rgba(6,182,212,0.15) 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(91,40,198,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
              Is your school ready to join?
            </h3>
            <p className="text-white/60 font-body text-sm">
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
