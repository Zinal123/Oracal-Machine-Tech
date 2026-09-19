import { useEffect, useRef, useState } from 'react'

const EMPTY = { name: '', email: '', phone: '', experience: '', coverLetter: '', agree: false }

export default function ApplicationModal({ position, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [fileName, setFileName] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrag = (e, active) => {
    preventDefaults(e)
    setDragActive(active)
  }

  const handleDrop = (e) => {
    preventDefaults(e)
    setDragActive(false)
    const files = e.dataTransfer.files
    if (files && files[0]) {
      fileInputRef.current.files = files
      setFileName(files[0].name)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 1500)
  }

  return (
    <div className="app-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="app-modal">
        <div className="app-modal-header">
          <h5>Application Form</h5>
          <button className="app-modal-close" onClick={onClose} aria-label="Close">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="app-modal-body">
          {submitted ? (
            <div className="alert-message success">
              <i className="fas fa-check-circle" />
              Thank you for your application! We will review it and get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-control" value={form.name} onChange={update('name')} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-control" value={form.email} onChange={update('email')} required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-control" value={form.phone} onChange={update('phone')} required />
              </div>
              <div className="form-group">
                <label className="form-label">Position Applied For *</label>
                <input className="form-control" value={position} readOnly required />
              </div>
              <div className="form-group">
                <label className="form-label">Years of Experience *</label>
                <input
                  type="number"
                  min={0}
                  max={60}
                  className="form-control"
                  value={form.experience}
                  onChange={update('experience')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Upload Resume (PDF/DOC) *</label>
                <div className="file-input-wrapper">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="resumeFile"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  <label
                    htmlFor="resumeFile"
                    className="file-input-label"
                    style={{ background: dragActive ? 'rgba(255, 107, 53, 0.2)' : undefined }}
                    onDragEnter={(e) => handleDrag(e, true)}
                    onDragOver={(e) => handleDrag(e, true)}
                    onDragLeave={(e) => handleDrag(e, false)}
                    onDrop={handleDrop}
                  >
                    <i className="fas fa-cloud-upload-alt" />
                    {fileName || 'Click to upload or drag and drop'}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Cover Letter</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Tell us about yourself..."
                  value={form.coverLetter}
                  onChange={update('coverLetter')}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                  checked={form.agree}
                  onChange={(e) => setForm((f) => ({ ...f, agree: e.target.checked }))}
                  required
                />
                <label className="form-check-label" htmlFor="agree">
                  {' '}I agree to the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-paper-plane" /> Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
