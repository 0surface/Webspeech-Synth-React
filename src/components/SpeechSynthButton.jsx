export function SpeechSynthButton({ handler, bgcolor, children }) {
  return (
    <button
      style={{
        display: 'inline-block',
        backgroundColor: bgcolor /*'#4CAF50'  Green */,
        border: 'solid',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
      }}
      onClick={handler}
    >
      {children}
    </button>
  )
}
