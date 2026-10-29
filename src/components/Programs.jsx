import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  {
    badge: 'FREE',
    title: 'Free Introductory Workshop',
    subtitle: 'One Day · On-Site · No Cost',
    description: 'We visit your school and deliver a complete, one-day AI immersion experience. No financial commitment, no technical requirements — just an eye-opening day that gets students and faculty excited about AI.',
    features: [
      'Full-day session at your school campus',
      'Covers fundamentals of AI, ML & real-world use cases',
      'Interactive demos — students see AI in action',
      'Q&A with experienced AI educators',
      'Zero cost, zero obligation',
      'Ideal for Grades 8–12',
    ],
    cta: 'Book Your Free Workshop',
    ctaHref: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    iconGrad: 'from-emerald-400 to-teal-500',
    badgeStyle: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    accentColor: 'text-emerald-300',
    highlight: false,
  },
  {
    badge: 'MONTHLY',
    title: 'Monthly AI Skills Program',
    subtitle: '4 Sessions/Month · Theory + Hands-On · Paid',
    description: 'Our flagship program for schools that have experienced the workshop and are ready to commit to transformative, ongoing AI education for their students.',
    features: [
      '4 structured sessions per month',
      'Theory + hands-on project-based learning',
      'Progressive curriculum: ML → Vision → NLP → Ethics',
      'Students build and present real AI projects',
      'Formal MOU with school management',
      'Progress reports shared with school faculty',
    ],
    cta: 'Partner With Us',
    ctaHref: '#contact',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconGrad: 'from-purple-DEFAULT to-purple-glow',
    badgeStyle: 'bg-purple-glow/20 text-purple-300 border border-purple-glow/30',
    accentColor: 'text-purple-300',
    highlight: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="programs" className="section-padding relative overflow-hidden" aria-label="Our Programs">
      {/* Blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] top-[-100px] right-[-100px] opacity-30" style={{ animationDelay: '-2s' }} />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Our Programs</p>
          <h2 className="section-heading mb-4">
            Two Ways to Bring AI{' '}
            <span className="water-gradient-text">to Your School</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-body text-sm sm:text-base">
            Whether you're just exploring or ready to commit, we have a path designed to earn your trust first.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              className={`relative water-card rounded-3xl p-7 sm:p-8 flex flex-col ${program.highlight ? 'ring-1 ring-purple-glow/30' : ''}`}
            >
              {/* Highlight glow */}
              {program.highlight && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple-DEFAULT/20 via-transparent to-cyan-water/10 opacity-60 pointer-events-none" />
              )}

              {/* Icon + Badge */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${program.iconGrad} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  style={{ boxShadow: program.highlight ? '0 8px 20px rgba(91,40,198,0.4)' : '0 8px 20px rgba(16,185,129,0.3)' }}
                >
                  {program.icon}
                </div>
                <span className={`text-xs font-heading font-bold px-3 py-1.5 rounded-full tracking-wide ${program.badgeStyle}`}>
                  {program.badge}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">{program.title}</h3>
                <p className={`text-sm font-body font-medium mb-4 ${program.accentColor}`}>{program.subtitle}</p>
                <p className="text-white/55 font-body text-sm leading-relaxed mb-6">{program.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70 font-body">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${program.accentColor}`}
                        fill="currentColor" viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={program.ctaHref}
                  onClick={(e) => { e.preventDefault(); document.querySelector(program.ctaHref)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className={program.highlight ? 'btn-primary justify-center w-full' : 'btn-outline justify-center w-full'}
                >
                  {program.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
