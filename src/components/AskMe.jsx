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
    <section className="secx askme reveal">
      <div className="shell">
        <p className="eyebrow">Ask about my experience</p>
        <h2 className="secx__title">
          Curious about something?
        </h2>
        <p className="secx__intro">
          Ask anything about my background, skills, or projects — the answers come straight from this site's content.
        </p>

        <form className="askme__form" onSubmit={handleSubmit}>
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

        <div className="askme__examples">
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
          <div className="askme__answer" ref={answerRef}>
            <p className="askme__answer-label">Answer</p>
            <p className="askme__answer-text">
              {answer}
              {loading && <span className="askme__cursor" />}
            </p>
          </div>
        )}

        {error && (
          <div className="askme__error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  )
}
