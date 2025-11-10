export function ErrorMessage ({message}) {
  if (!message) return null; 

  return (
    <div 
    className="error-message" 
    style={{
      marginTop: "10px",
      fontSize: "18px",
      textAlign: "center"
    }}>
      {message}
    </div>
  )
}