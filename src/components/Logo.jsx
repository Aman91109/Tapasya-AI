export default function Logo({ className = 'w-10 h-10', ...props }) {
  return (
    <img
      src="/logo.png"
      alt="Tapasya AI Logo"
      className={className}
      style={{ objectFit: 'contain' }}
      {...props}
    />
  )
}
