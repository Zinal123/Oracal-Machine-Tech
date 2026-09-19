export default function SectionHeader({ title, subtitle, light = false, align }) {
  return (
    <div className="section-header" style={align ? { textAlign: align } : undefined}>
      <h2 className="section-title" style={{ color: light ? '#fff' : undefined, textAlign: align }}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
