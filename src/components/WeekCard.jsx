import { useEffect, useState } from 'react'

// Checks whether the PDF file really exists in public/pdfs before showing buttons.
function usePdfAvailable(path) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    if (!path) return
    let cancelled = false
    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'))
      })
      .catch(() => { if (!cancelled) setAvailable(false) })
    return () => { cancelled = true }
  }, [path])

  return available
}

export default function WeekCard({ lab }) {
  const isDone = lab.status === 'Completed'
  const pdfReady = usePdfAvailable(lab.pdf)

  return (
    <article className={`card ${isDone ? '' : 'card--muted'}`}>
      <div className="card__top">
        <span className="card__week">Week {lab.week}</span>
        <span className={`badge ${isDone ? 'badge--done' : 'badge--none'}`}>{lab.status}</span>
      </div>
      <h3>{lab.title}</h3>
      <p>{lab.description}</p>
      {lab.pdf && pdfReady && (
        <div className="card__actions">
          <a className="btn btn--primary btn--sm" href={lab.pdf} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
          <a className="btn btn--ghost btn--sm" href={lab.pdf} download>
            Download PDF
          </a>
        </div>
      )}
      {lab.pdf && !pdfReady && (
        <p className="card__note">PDF will appear here once the file is added.</p>
      )}
    </article>
  )
}
