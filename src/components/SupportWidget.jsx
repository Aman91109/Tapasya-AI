import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm the Tapasya AI Assistant. How can I help you today? Ask me about our programs, workshops, or partner schools.",
      sender: 'bot',
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping]     = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  useEffect(() => { scrollToBottom() }, [messages, isTyping])

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { id: Date.now(), text: inputValue.trim(), sender: 'user' }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const lowerInput = userMessage.text.toLowerCase()
      let botResponse = "Thanks for your question! Please use the WhatsApp button at the bottom right to contact our team for detailed queries."

      if (lowerInput.includes('workshop') || lowerInput.includes('free')) {
        botResponse = "We offer zero-cost introductory workshops for schools — a full day of AI education with no commitment. Book one via the Contact section!"
      } else if (lowerInput.includes('program') || lowerInput.includes('course') || lowerInput.includes('pricing')) {
        botResponse = "Our monthly AI program delivers 4 structured sessions/month for students aged 14–18. We partner via a formal MOU with school management."
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('whatsapp')) {
        botResponse = "You can reach us on WhatsApp (+91 95087 25672), email (hello@tapasya.ai), or use the Contact form on this page!"
      } else if (lowerInput.includes('partner') || lowerInput.includes('school')) {
        botResponse = "We partner with 6+ schools across India! Check the 'Our Partners' section to see all our school collaborations."
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-body">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] max-w-[calc(100vw-3rem)] h-[450px] max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-2 origin-bottom-right"
            style={{
              background: 'rgba(10,19,73,0.92)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(91,40,198,0.15)',
            }}
          >
            {/* Header */}
            <div
              className="text-white p-4 flex items-center justify-between flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(91,40,198,0.5) 0%, rgba(6,182,212,0.2) 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">Tapasya AI Support</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <p className="text-white/60 text-xs">Always online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
              style={{ background: 'rgba(6,12,48,0.5)' }}
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`max-w-[82%] ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' ? 'text-white rounded-tr-none' : 'text-white/80 rounded-tl-none'
                    }`}
                    style={msg.sender === 'user'
                      ? { background: 'linear-gradient(135deg, #5B28C6, #7B4FD4)' }
                      : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="self-start max-w-[82%]">
                  <div
                    className="p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 h-10"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '-0.3s' }} />
                    <span className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '-0.15s' }} />
                    <span className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 flex gap-2 flex-shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(6,12,48,0.6)' }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-xl px-3 py-2 text-sm text-white/90 outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.9)',
                }}
                onFocus={(e) => { e.target.style.border = '1px solid rgba(139,92,246,0.5)'; e.target.style.background = 'rgba(255,255,255,0.1)' }}
                onBlur={(e) => { e.target.style.border = '1px solid rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.07)' }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #5B28C6, #7B4FD4)' }}
                aria-label="Send message"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919508725672"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 z-50`}
          style={{
            background: isOpen
              ? 'rgba(30,30,60,0.95)'
              : 'linear-gradient(135deg, #5B28C6, #8B5CF6)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: isOpen
              ? '0 4px 16px rgba(0,0,0,0.4)'
              : '0 4px 20px rgba(91,40,198,0.5)',
          }}
          aria-label={isOpen ? 'Close chat' : 'Open Tapasya AI chat'}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
