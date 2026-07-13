import { useState, useRef } from 'react'

const EXAMPLES = [
  'Summarize Naveen in 30 seconds',
  'Does he have pricing experience?',
  'Tell me about Reochart',
  'Has he launched products before?',
]

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
        <p className="eyebrow">Interactive Portfolio</p>
        <h2 className="secx__title" style={{ margin: '0 auto', maxWidth: '32ch' }}>
          Ask Naveen
        </h2>
        <p className="secx__intro" style={{ margin: '14px auto 28px auto', fontSize: '17px', opacity: 0.9, maxWidth: '52ch' }}>
          I built this AI Q&A tool to make it easy for you to instantly learn about my PMM background, GTM metrics, and projects.
        </p>

        <div style={{ marginBottom: '32px' }}>
          <a className="dl-btn" href="/Naveen_Kumar_Resume.pdf" download="Naveen_Kumar_Resume.pdf" style={{ marginTop: '0' }}>
            Download résumé
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ marginLeft: '8px', verticalAlign: 'middle' }}
            >
              <path d="M12 3v12" />
              <path d="M7 12l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </div>

        <form className="askme__form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
          <div className="askme__inputwrap">
            <input
              id="askme-input"
              className="askme__input"
              type="text"
              placeholder="e.g. Does he have GTM experience?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
              autoComplete="off"
            />
            <button
              className="askme__btn"
              type="submit"
              disabled={loading || !query.trim()}
              aria-label="Ask question"
            >
              {loading ? (
                <span className="askme__dots">
                  <span /><span /><span />
                </span>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
          </div>
        </form>

        <div className="askme__examples" style={{ justifyContent: 'center', maxWidth: '640px', margin: '16px auto 0 auto' }}>
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className="askme__chip"
              onClick={() => handleExample(ex)}
              disabled={loading}
            >
              {ex}
            </button>
          ))}
        </div>

        {(answer || loading) && (
          <div className="askme__answer" style={{ width: '100%', maxWidth: '640px', margin: '28px auto 0 auto', textAlign: 'left' }} ref={answerRef}>
            <p className="askme__answer-label">Answer</p>
            <p className="askme__answer-text">
              {answer}
              {loading && <span className="askme__cursor" />}
            </p>
          </div>
        )}

        {error && (
          <div className="askme__error" style={{ width: '100%', maxWidth: '640px', margin: '16px auto 0 auto' }}>
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  )
}
