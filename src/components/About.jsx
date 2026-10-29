import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 6,   suffix: '+', label: 'Schools Partnered' },
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 48,  suffix: '+', label: 'Sessions Conducted' },
  { value: 97,  suffix: '%', label: 'Satisfaction Rate' },
]

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Our Mission',
    description: 'To make practical AI education accessible to every school student in India — not as an elective, but as a foundational life skill that unlocks opportunity in the careers of tomorrow.',
    accent: 'from-purple-glow to-purple-light',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'What We Teach',
    description: 'From machine learning fundamentals and computer vision to AI ethics and real-world project building — our curriculum is hands-on, age-appropriate, and aligned with industry relevance.',
    accent: 'from-cyan-water to-cyan-light',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Our Approach',
    description: 'We partner with schools through a formal MOU — starting with a zero-cost introductory day to build trust, then transitioning into a structured monthly program that teachers and principals stand behind.',
    accent: 'from-indigo-400 to-purple-glow',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden" aria-label="About Tapasya AI">
      {/* Decorative blobs */}
      <div className="blob blob-2 w-[500px] h-[500px] top-0 left-[-150px] opacity-40" />
      <div className="blob blob-1 w-[400px] h-[400px] bottom-0 right-[-100px] opacity-30" style={{ animationDelay: '-4s' }} />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">
            Who We Are
          </motion.p>
          <motion.h2 variants={itemVariants} className="section-heading mb-4">
            Shaping India's{' '}
            <span className="water-gradient-text">AI-Ready Generation</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/55 max-w-2xl mx-auto text-base sm:text-lg font-body leading-relaxed">
            Tapasya AI was founded on a simple belief: that AI literacy should begin
            in school, not after college. We partner directly with school management
            to bring rigorous, practical AI education to students aged 14–18.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={itemVariants}
              className="water-card rounded-2xl p-7 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${pillar.accent} rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                style={{ boxShadow: '0 8px 20px rgba(91,40,198,0.3)' }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/55 font-body leading-relaxed text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <div className="glossy-stats rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/55 font-body text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
