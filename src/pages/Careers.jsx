import { useState } from 'react'
import './Careers.css'
import usePageMeta from '../hooks/usePageMeta.js'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import ApplicationModal from '../components/careers/ApplicationModal.jsx'

const BENEFITS = [
  { icon: 'fas fa-rocket', gradient: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)', title: 'Career Growth', text: 'Clear path for advancement with continuous learning opportunities and skill development.' },
  { icon: 'fas fa-heart', gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', title: 'Health & Wellness', text: 'Comprehensive health insurance, wellness programs, and work-life balance initiatives.' },
  { icon: 'fas fa-graduation-cap', gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', title: 'Training Programs', text: 'Invest in your future with sponsored certifications and technical training programs.' },
  { icon: 'fas fa-users', gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)', title: 'Team Culture', text: 'Inclusive, collaborative environment where your ideas matter and innovation is encouraged.' },
  { icon: 'fas fa-coins', gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', title: 'Competitive Compensation', text: 'Attractive salary packages, performance bonuses, and benefits tailored to your needs.' },
  { icon: 'fas fa-globe', gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)', title: 'Global Opportunities', text: 'Work with international teams and explore opportunities across our global offices.' },
]

const JOBS = [
  {
    title: 'Senior Mechanical Engineer',
    location: 'Vadodara, Gujarat',
    type: 'Full Time',
    experience: '5+ Years',
    description:
      "We're looking for an experienced Mechanical Engineer to lead design and development of advanced laser cutting systems. Responsible for CAD design, simulations, and prototype development.",
    requirements: [
      '5+ years experience in mechanical design',
      'Expertise in CAD (AutoCAD, SolidWorks)',
      'Knowledge of laser systems and manufacturing',
      'Strong problem-solving skills',
    ],
  },
  {
    title: 'CNC Programmer',
    location: 'Vadodara, Gujarat',
    type: 'Full Time',
    experience: '3+ Years',
    description:
      'Seeking experienced CNC Programmer to develop and optimize control software for our manufacturing machines. Collaborate with design and production teams.',
    requirements: [
      '3+ years CNC programming experience',
      'Proficiency in G-code and CAM software',
      'Knowledge of laser cutting systems',
      'Attention to detail and precision',
    ],
  },
  {
    title: 'Quality Assurance Engineer',
    location: 'Vadodara, Gujarat',
    type: 'Full Time',
    experience: '2+ Years',
    description:
      'Join our QA team to ensure highest quality standards for our manufacturing equipment. Conduct testing, create test plans, and manage quality metrics.',
    requirements: [
      '2+ years QA experience in manufacturing',
      'Knowledge of ISO standards',
      'Testing and validation expertise',
      'Documentation and reporting skills',
    ],
  },
  {
    title: 'Sales Executive',
    location: 'Pan India',
    type: 'Full Time',
    experience: '2+ Years',
    description:
      'Exciting opportunity to build relationships with clients and drive sales for industrial machinery. Travel across regions and expand our market presence.',
    requirements: [
      '2+ years B2B sales experience',
      'Knowledge of industrial machinery market',
      'Strong communication skills',
      'Self-motivated and target-driven',
    ],
  },
]

export default function Careers() {
  usePageMeta('Careers | Oracle Machine Tech', 'Careers at Oracle Machine Tech - Join Our Team')

  const [applyingTo, setApplyingTo] = useState(null)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Be part of a team driving innovation in manufacturing technology worldwide.</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader title="Why Work With Us?" />
          <div className="row g-4">
            {BENEFITS.map((b, i) => (
              <Reveal as="div" className="col-md-6 col-lg-4" key={b.title} delay={i * 0.1}>
                <div className="benefit-card">
                  <div className="benefit-icon" style={{ background: b.gradient }}>
                    <i className={b.icon} />
                  </div>
                  <h4 className="benefit-title">{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <SectionHeader title="Current Open Positions" />
          <div className="row g-4">
            {JOBS.map((job, i) => (
              <Reveal as="div" className="col-lg-6" key={job.title} delay={i * 0.1}>
                <div className="job-card">
                  <h4 className="job-title">{job.title}</h4>
                  <div className="job-meta">
                    <span className="job-meta-item"><i className="fas fa-map-marker-alt" />{job.location}</span>
                    <span className="job-meta-item"><i className="fas fa-briefcase" />{job.type}</span>
                    <span className="job-meta-item"><i className="fas fa-graduation-cap" />{job.experience}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-requirements">
                    <ul className="requirement-list">
                      {job.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-primary" onClick={() => setApplyingTo(job.title)}>
                    Apply Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {applyingTo && <ApplicationModal position={applyingTo} onClose={() => setApplyingTo(null)} />}
    </>
  )
}
