import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@tapasya.ai',
    href: 'mailto:hello@tapasya.ai',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Base',
    value: 'Noida, Uttar Pradesh, India',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', school: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Wire to backend / email service
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding bg-[#0A1349] relative overflow-hidden" aria-label="Contact">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B28C6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-glow font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Bring AI Education
            <span className="block bg-gradient-to-r from-purple-light to-purple-glow bg-clip-text text-transparent">
              to Your School
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body">
            Reach out to schedule a free introductory workshop or to learn more about
            our monthly AI skills program. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glossy-card-dark rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="text-white font-heading font-bold text-lg mb-2">Contact Details</h3>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#5B28C6]/20 rounded-xl flex items-center justify-center text-purple-glow flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-body mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white font-body text-sm hover:text-purple-glow transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-body text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glossy-card-dark rounded-2xl p-6">
              <p className="text-white/80 font-body text-sm leading-relaxed">
                <span className="text-purple-glow font-semibold">Prefer a quick call?</span> We're happy to schedule a
                30-minute discovery call with school management — no sales pressure, just
                a genuine conversation about your students' future.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glossy-card-dark rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-2">Message Received!</h3>
                <p className="text-white/60 font-body text-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glossy-card-dark rounded-2xl p-6 md:p-8 flex flex-col gap-5"
                aria-label="Partnership inquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-xs font-body font-medium mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Principal / Coordinator name"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-purple-glow focus:ring-1 focus:ring-purple-glow transition-colors min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-white/70 text-xs font-body font-medium mb-1.5">
                      School Name *
                    </label>
                    <input
                      id="school"
                      name="school"
                      type="text"
                      required
                      value={form.school}
                      onChange={handleChange}
                      placeholder="Name of your school"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-purple-glow focus:ring-1 focus:ring-purple-glow transition-colors min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-xs font-body font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@school.edu"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-purple-glow focus:ring-1 focus:ring-purple-glow transition-colors min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/70 text-xs font-body font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-purple-glow focus:ring-1 focus:ring-purple-glow transition-colors min-h-[44px]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70 text-xs font-body font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your school - grade levels, student count, goals..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-purple-glow focus:ring-1 focus:ring-purple-glow transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Partnership Inquiry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

