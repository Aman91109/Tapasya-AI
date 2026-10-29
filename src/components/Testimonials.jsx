import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import testimonials from '../data/testimonials.json'

export default function Testimonials() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" aria-label="Testimonials">
      {/* Blobs */}
      <div className="blob blob-1 w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-25" style={{ animationDelay: '-3s' }} />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">What They Say</p>
          <h2 className="section-heading mb-4">
            Voices from{' '}
            <span className="water-gradient-text">Our Community</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Card Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="water-card rounded-3xl p-8 md:p-10"
              >
                {/* Quote Mark */}
                <svg
                  className="w-10 h-10 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  style={{ color: 'rgba(139,92,246,0.35)' }}
                >
                  <path d="M10 8C6 8 3 11 3 15v9h9v-9H7c0-2.2 1.8-4 3-4V8zm16 0c-4 0-7 3-7 7v9h9v-9h-5c0-2.2 1.8-4 3-4V8z" />
                </svg>

                <p className="text-white/75 font-body text-base sm:text-lg leading-relaxed italic mb-6">
                  "{testimonials[active].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ border: '2px solid rgba(139,92,246,0.35)' }}
                  />
                  <div>
                    <p className="font-heading font-bold text-white text-sm">{testimonials[active].name}</p>
                    <p className="text-white/45 text-xs font-body">
                      {testimonials[active].role} · {testimonials[active].school}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all min-h-[44px]"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? '24px' : '10px',
                      height: '10px',
                      background: i === active
                        ? 'linear-gradient(135deg, #5B28C6, #8B5CF6)'
                        : 'rgba(255,255,255,0.18)',
                      boxShadow: i === active ? '0 0 8px rgba(91,40,198,0.5)' : 'none',
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all min-h-[44px]"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
