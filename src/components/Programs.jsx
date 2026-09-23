import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  {
    badge: 'FREE',
    badgeColor: 'bg-emerald-500',
    title: 'Free Introductory Workshop',
    subtitle: 'One Day · On-Site · No Cost',
    description:
      'We visit your school and deliver a complete, one-day AI immersion experience. No financial commitment, no technical requirements — just an eye-opening day that gets students and faculty excited about AI.',
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
    gradient: 'from-emerald-500/10 to-teal-500/10',
    borderAccent: 'border-emerald-200',
    highlight: false,
  },
  {
    badge: 'MONTHLY',
    badgeColor: 'bg-[#5B28C6]',
    title: 'Monthly AI Skills Program',
    subtitle: '4 Sessions/Month · Theory + Hands-On · Paid',
    description:
      'Our flagship program for schools that have experienced the workshop and are ready to commit to transformative, ongoing AI education for their students.',
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
    gradient: 'from-purple-DEFAULT/10 to-navy-DEFAULT/10',
    borderAccent: 'border-[#5B28C6]/30',
    highlight: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="programs" className="section-padding bg-white" aria-label="Our Programs">
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
            Our Programs
          </p>
          <h2 className="section-heading mb-4">
            Two Ways to Bring AI
            <span className="block purple-gradient-text">to Your School</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body">
            Whether you're just exploring or ready to commit, we have a path designed to earn your trust first.
          </p>
        </motion.div>

        {/* Program cards */}
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
              className={`relative glossy-card rounded-3xl border-2 ${program.borderAccent} p-8 flex flex-col ${program.highlight ? 'shadow-lg shadow-purple-DEFAULT/10' : ''}`}
            >
              {/* Highlight ring */}
              {program.highlight && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple-DEFAULT via-purple-light to-purple-glow opacity-20 pointer-events-none" />
              )}

              {/* Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${program.highlight ? 'bg-gradient-to-br from-purple-DEFAULT to-purple-dark' : 'bg-gradient-to-br from-emerald-500 to-teal-600'} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {program.icon}
                </div>
                <span className={`${program.badgeColor} text-white text-xs font-heading font-bold px-3 py-1 rounded-full tracking-wide`}>
                  {program.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-[#0A1349] mb-1">{program.title}</h3>
              <p className={`text-sm font-body font-medium mb-4 ${program.highlight ? 'text-[#5B28C6]' : 'text-emerald-600'}`}>
                {program.subtitle}
              </p>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">{program.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {program.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700 font-body">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${program.highlight ? 'text-[#5B28C6]' : 'text-emerald-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
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
                className={program.highlight ? 'btn-primary justify-center' : 'btn-outline justify-center'}
              >
                {program.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

