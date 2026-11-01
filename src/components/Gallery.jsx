import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import sessions from '../data/sessions.json'

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

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
          className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev */}
        <button
          className="absolute left-4 z-10 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
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
            <p className="text-white/55 text-sm font-body mb-2">
              {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-white/75 font-body text-sm leading-relaxed">{item.caption}</p>
          </div>
          <p className="text-white/35 text-xs font-body">{index + 1} / {items.length}</p>
        </motion.div>

        {/* Next */}
        <button
          className="absolute right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full text-white transition-all"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
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

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [filter, setFilter] = useState('all')

  const schools = ['all', ...Array.from(new Set(sessions.map((s) => s.schoolName)))]
  const sorted   = [...sessions].sort((a, b) => new Date(b.date) - new Date(a.date))
  const filtered = filter === 'all' ? sorted : sorted.filter((s) => s.schoolName === filter)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const prevLight = useCallback(() => setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1)), [filtered.length])
  const nextLight = useCallback(() => setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1)), [filtered.length])

  return (
    <section id="gallery" className="section-padding relative overflow-hidden" aria-label="Session Gallery">
      {/* Blobs */}
      <div className="blob blob-3 w-[450px] h-[450px] top-1/2 right-[-150px] opacity-30" style={{ animationDelay: '-2s' }} />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-3">Our Sessions</p>
          <h2 className="section-heading mb-4">
            AI Learning in{' '}
            <span className="water-gradient-text">Action</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-body text-sm sm:text-base">
            A glimpse into our workshops and monthly sessions across partner schools.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {schools.map((school) => (
            <button
              key={school}
              onClick={() => setFilter(school)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 min-h-[36px] ${
                filter === school
                  ? 'text-white'
                  : 'text-white/55 hover:text-white/80'
              }`}
              style={filter === school
                ? {
                    background: 'linear-gradient(135deg, #5B28C6, #8B5CF6)',
                    border: '1px solid rgba(139,92,246,0.6)',
                    boxShadow: '0 4px 16px rgba(91,40,198,0.35)',
                  }
                : {
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(8px)',
                  }
              }
            >
              {school === 'all' ? 'All Schools' : school}
            </button>
          ))}
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="relative overflow-hidden flex w-full -mx-4 sm:mx-0 px-4 sm:px-0">
          <motion.div
            className="flex gap-5 w-max py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 60, repeat: Infinity }}
          >
            {Array(8).fill(filtered).flat().map((session, idx) => (
              <article
                key={`${session.id}-${idx}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer water-card w-[260px] sm:w-[320px] shrink-0 flex-shrink-0"
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
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060C30]/90 via-[#0A1349]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-heading font-semibold text-sm leading-tight mb-0.5">{session.schoolName}</p>
                  <p className="text-white/65 text-xs font-body">
                    {new Date(session.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-white/75 font-body text-sm leading-snug line-clamp-2">{session.caption}</p>
                  <p className="text-purple-300 text-xs font-body mt-1.5 font-medium">{session.schoolName}</p>
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
