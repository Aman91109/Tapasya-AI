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
    value: '+91 95087 25672',
    href: 'tel:+919508725672',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Patna, Bihar, India',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 95087 25672',
    href: 'https://wa.me/919508725672',
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', school: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange  = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden" aria-label="Contact">
      {/* Blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-40" />
      <div className="blob blob-2 w-[400px] h-[400px] bottom-[-80px] left-[-100px] opacity-30" style={{ animationDelay: '-4s' }} />

      <div className="container-max relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-heading mb-4">
            Bring AI Education{' '}
            <span className="water-gradient-text">to Your School</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-body text-sm sm:text-base">
            Reach out to schedule a free introductory workshop or to learn more about
            our monthly AI skills program. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Details Card */}
            <div className="water-card rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-white font-heading font-bold text-lg mb-1">Contact Details</h3>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(91,40,198,0.2)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      color: '#a78bfa',
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white/85 font-body text-sm hover:text-purple-300 transition-colors" target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white/85 font-body text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick call card */}
            <div className="water-card rounded-2xl p-6">
              <p className="text-white/70 font-body text-sm leading-relaxed">
                <span className="text-purple-300 font-semibold">Prefer a quick call?</span>{' '}
                We're happy to schedule a 30-minute discovery call with school management —
                no sales pressure, just a genuine conversation about your students' future.
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
              <div className="water-card rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)' }}
                >
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-heading font-bold text-xl mb-2">Message Received!</h3>
                <p className="text-white/55 font-body text-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="water-card rounded-2xl p-6 md:p-8 flex flex-col gap-5"
                aria-label="Partnership inquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white/55 text-xs font-body font-medium mb-1.5">Your Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Principal / Coordinator name"
                      className="water-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-white/55 text-xs font-body font-medium mb-1.5">School Name *</label>
                    <input
                      id="school" name="school" type="text" required
                      value={form.school} onChange={handleChange}
                      placeholder="Name of your school"
                      className="water-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/55 text-xs font-body font-medium mb-1.5">Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@school.edu"
                      className="water-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/55 text-xs font-body font-medium mb-1.5">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="water-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/55 text-xs font-body font-medium mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your school — grade levels, student count, goals..."
                    className="water-input resize-none"
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
