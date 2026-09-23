import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import testimonials from '../data/testimonials.json'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="section-padding bg-gray-50" aria-label="Testimonials">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#5B28C6] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            What They Say
          </p>
          <h2 className="section-heading mb-4">
            Voices from
            <span className="block purple-gradient-text">Our Community</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glossy-card rounded-3xl p-8 md:p-10"
              >
                {/* Quote mark */}
                <svg className="w-10 h-10 text-[#5B28C6]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6 8 3 11 3 15v9h9v-9H7c0-2.2 1.8-4 3-4V8zm16 0c-4 0-7 3-7 7v9h9v-9h-5c0-2.2 1.8-4 3-4V8z"/>
                </svg>

                <p className="text-gray-700 font-body text-lg leading-relaxed italic mb-6">
                  "{testimonials[active].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#5B28C6]/20"
                  />
                  <div>
                    <p className="font-heading font-bold text-[#0A1349] text-sm">{testimonials[active].name}</p>
                    <p className="text-gray-500 text-xs font-body">{testimonials[active].role} · {testimonials[active].school}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#5B28C6] hover:text-[#5B28C6] transition-colors min-h-[44px]"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2.5 bg-[#5B28C6]' : 'w-2.5 h-2.5 bg-gray-200'}`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#5B28C6] hover:text-[#5B28C6] transition-colors min-h-[44px]"
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

