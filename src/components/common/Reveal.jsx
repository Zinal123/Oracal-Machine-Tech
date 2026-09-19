import useReveal from '../../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', style, delay, children, ...rest }) {
  const [ref, active] = useReveal()
  const classes = ['reveal', active ? 'active' : '', className].filter(Boolean).join(' ')
  const mergedStyle = delay ? { transitionDelay: `${delay}s`, ...style } : style

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  )
}
