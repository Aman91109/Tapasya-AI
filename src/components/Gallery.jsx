import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import sessions from '../data/sessions.json'

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  // Touch swipe
  const touchStart = useRef(null)
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) delta > 0 ? onNext() : onPrev()
    touchStart.current = null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev */}
        <button
          className="absolute left-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Content */}
        <motion.div
          key={index}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 max-w-4xl w-full mx-4 flex flex-col items-center gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.image}
            alt={item.caption}
            className="w-full max-h-[65vh] object-cover rounded-2xl shadow-2xl"
          />
          <div className="text-center text-white max-w-2xl px-4">
            <p className="font-heading font-semibold text-lg mb-1">{item.schoolName}</p>
            <p className="text-white/60 text-sm font-body mb-2">
              {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-white/80 font-body text-sm leading-relaxed">{item.caption}</p>
          </div>
          <p className="text-white/40 text-xs font-body">{index + 1} / {items.length}</p>
        </motion.div>

        {/* Next */}
        <button
          className="absolute right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [filter, setFilter] = useState('all')

  const schools = ['all', ...Array.from(new Set(sessions.map((s) => s.schoolName)))]
  const sorted = [...sessions].sort((a, b) => new Date(b.date) - new Date(a.date))
  const filtered = filter === 'all' ? sorted : sorted.filter((s) => s.schoolName === filter)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const prevLight = useCallback(() => setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1)), [filtered.length])
  const nextLight = useCallback(() => setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1)), [filtered.length])

  return (
    <section id="gallery" className="section-padding bg-gray-50" aria-label="Session Gallery">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#5B28C6] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Sessions
          </p>
          <h2 className="section-heading mb-4">
            AI Learning in
            <span className="block purple-gradient-text">Action</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body">
            A glimpse into our workshops and monthly sessions across partner schools.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {schools.map((school) => (
            <button
              key={school}
              onClick={() => setFilter(school)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 min-h-[36px] ${
                filter === school
                  ? 'bg-[#5B28C6] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#5B28C6] hover:text-[#5B28C6]'
              }`}
            >
              {school === 'all' ? 'All Schools' : school}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden flex w-full max-w-[100vw] -mx-4 sm:mx-0 px-4 sm:px-0">
          <motion.div
            className="flex gap-5 w-max py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {Array(8).fill(filtered).flat().map((session, idx) => (
              <article
                key={`${session.id}-${idx}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer glossy-card w-[280px] sm:w-[350px] shrink-0"
                onClick={() => openLightbox(idx % filtered.length)}
                tabIndex={0}
                role="button"
                aria-label={`View photo from ${session.schoolName}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx % filtered.length)}
              >
                <img
                  src={session.image}
                  alt={session.caption}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-heading font-semibold text-sm leading-tight mb-1">{session.schoolName}</p>
                  <p className="text-white/70 text-xs font-body">
                    {new Date(session.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 font-body text-sm leading-snug line-clamp-2">{session.caption}</p>
                  <p className="text-[#5B28C6] text-xs font-body mt-1.5 font-medium">{session.schoolName}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevLight}
          onNext={nextLight}
        />
      )}
    </section>
  )
}

