import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { askAIAssistant } from '../../services/aiService.js'
import './AIAssistantModal.css'

const INITIAL_MESSAGES = [
  {
    sender: 'assistant',
    text: `Hello! 👋 I am your Oracle Machine Tech Technical Advisor.
How can I assist you today with our fiber laser cutters, CNC plasma, 5-axis bending, or robotic welding machines?`,
  },
]

const QUICK_PROMPTS = [
  'Recommend machine for 15mm steel',
  'What are the specs for Tube Laser?',
  'Tell me about 5-Axis Bending',
  'Robotic Welding cycle time & speed',
  'Warranty and after-sales support',
  'Get pricing / request quotation',
]

export default function AIAssistantModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = async (textToSend) => {
    const query = (textToSend || inputValue).trim()
    if (!query || loading) return

    const userMsg = { sender: 'user', text: query }
    const nextHistory = [...messages, userMsg]
    setMessages(nextHistory)
    setInputValue('')
    setLoading(true)

    try {
      const response = await askAIAssistant(query, messages)
      setMessages((prev) => [...prev, { sender: 'assistant', text: response }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Sorry, I encountered a temporary connection issue. Please contact us on WhatsApp at +91-98765-43210 for immediate assistance.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSend()
  }

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          className="ai-assistant-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Ask AI Assistant"
        >
          <span className="ai-pulse-dot" />
          <i className="fas fa-robot" />
          <span>Ask AI Advisor</span>
        </button>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div className="ai-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="ai-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="ai-modal-header">
              <div className="ai-header-info">
                <div className="ai-header-avatar">
                  <i className="fas fa-microchip" />
                </div>
                <div>
                  <h3 className="ai-header-title">Oracle AI Advisor</h3>
                  <span className="ai-header-subtitle">Industrial Machinery Intelligence</span>
                </div>
              </div>
              <button
                className="ai-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
              >
                <i className="fas fa-times" />
              </button>
            </div>

            <div className="ai-modal-body" ref={bodyRef}>
              {/* Quick Prompt Chips & Actions at Top */}
              <div className="ai-top-prompts-panel">
                <div className="ai-top-prompts-header">
                  <small><i className="fas fa-lightbulb" style={{ color: 'var(--accent-orange)' }} /> Suggested Questions:</small>
                </div>
                <div className="ai-quick-chips">
                  {QUICK_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      className="ai-chip"
                      onClick={() => handleSend(prompt)}
                      disabled={loading}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                <div className="ai-chat-actions">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="ai-chat-action-btn whatsapp"
                  >
                    <i className="fab fa-whatsapp" /> WhatsApp Sales
                  </a>
                  <Link
                    to="/contact"
                    className="ai-chat-action-btn contact"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="fas fa-envelope" /> Request Quote
                  </Link>
                </div>
              </div>

              {/* Chat Messages flow at the bottom */}
              <div className="ai-messages-list">
                {messages.map((m, idx) => (
                  <div key={idx} className={`ai-message ${m.sender}`}>
                    <div className="ai-bubble">{m.text}</div>
                  </div>
                ))}

                {loading && (
                  <div className="ai-typing-indicator">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
            </div>

            <div className="ai-modal-footer">
              <form className="ai-input-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Ask about machinery, specs, prices..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={loading}
                />
                <button type="submit" className="ai-send-btn" disabled={loading || !inputValue.trim()}>
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
