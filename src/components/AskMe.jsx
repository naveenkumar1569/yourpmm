import { useState, useRef } from 'react'

const EXAMPLES = [
  'What makes Naveen different from a typical PMM?',
  'Walk me through a product launch he led',
  'Has he built and marketed his own products?',
  'Paste a JD and see if he fits',
]

// Parse basic markdown markers like **bold** and *italics* so they render natively
function parseMarkdown(text) {
  if (!text) return ''
  
  // Split on bold markers
  const boldParts = text.split('**')
  return boldParts.map((boldPart, i) => {
    const isBold = i % 2 === 1
    
    // Within each part, split on italic markers
    const italicParts = boldPart.split('*')
    const content = italicParts.map((italicPart, j) => {
      const isItalic = j % 2 === 1
      if (isItalic) {
        return <em key={j}>{italicPart}</em>
      }
      return italicPart
    })

    if (isBold) {
      return <strong key={i}>{content}</strong>
    }
    return <span key={i}>{content}</span>
  })
}

export default function AskMe() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const abortRef = useRef(null)
  const answerRef = useRef(null)

  async function ask(q) {
    const text = q || query
    if (!text.trim() || loading) return

    setAnswer('')
    setError('')
    setLoading(true)

    try {
      abortRef.current = new AbortController()

      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text.trim() }),
        signal: abortRef.current.signal,
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Something went wrong')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setAnswer(accumulated)
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    ask()
  }

  function handleExample(text) {
    setQuery(text)
    ask(text)
  }

  return (
    <section id="about" className="secx askme reveal">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 className="heading">
          <span style={{ marginRight: '14px' }}>Ask</span>
          <span className="naveen-wrap">
            <svg
              className="gemini-icon"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gem-v" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4285F4" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="gem-h" x1="0" y1="14" x2="28" y2="14" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#4285F4" />
                </linearGradient>
              </defs>
              <path
                d="M14 0 C14 0 15.5 9 18.5 11.5 C21.5 14 28 14 28 14 C28 14 21.5 14 18.5 16.5 C15.5 19 14 28 14 28 C14 28 12.5 19 9.5 16.5 C6.5 14 0 14 0 14 C0 14 6.5 14 9.5 11.5 C12.5 9 14 0 14 0Z"
                fill="url(#gem-v)"
              />
            </svg>
            Naveen
          </span>
        </h2>
        <p className="subtitle">
          Hi, I'm Naveen's AI. Ask me about his PMM background, SaaS products, or paste a job description. I have access to all his metrics and none of his search history.
        </p>

        <form className="askme__form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '660px', margin: '0 auto' }}>
          <div className="input-row">
            <input
              id="askme-input"
              type="text"
              placeholder="e.g. Does he have GTM experience?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
              autoComplete="off"
            />
            <button
              className="send-btn"
              type="submit"
              disabled={loading || !query.trim()}
              aria-label="Ask question"
            >
              {loading ? (
                <span className="askme__dots">
                  <span /><span /><span />
                </span>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9 3l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </form>

        <div className="chips">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className="chip"
              onClick={() => handleExample(ex)}
              disabled={loading}
            >
              {ex}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '0px' }}>
          <a
            className="dl-btn"
            href="/Naveen_Kumar_Resume.pdf"
            download="Naveen_Kumar_Resume.pdf"
            style={{ display: 'inline-flex', margin: '44px auto 0 auto' }}
          >
            Download résumé
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
              <path d="M9 3v9M5 9l4 4 4-4M3 15h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {(answer || loading) && (
          <div className="askme__answer" style={{ width: '100%', maxWidth: '660px', margin: '28px auto 0 auto', textAlign: 'left' }} ref={answerRef}>
            <p className="askme__answer-label">Answer</p>
            <p className="askme__answer-text">
              {parseMarkdown(answer)}
              {loading && <span className="askme__cursor" />}
            </p>
          </div>
        )}

        {error && (
          <div className="askme__error" style={{ width: '100%', maxWidth: '660px', margin: '16px auto 0 auto' }}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  )
}
