export function SpeechSynthButton({ handler, bgcolor, children }) {
  return (
    <button
      style={{
        display: 'inline-block',
        backgroundColor: bgcolor,
        border: 'solid',
        color: 'white',
        padding: '10px 22px',
        borderRadius: '12px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
      }}
      onClick={handler}
    >
      {children}
    </button>
  )
}
