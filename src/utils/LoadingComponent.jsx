import "./LoadingClass.css"; 

export default function LoadingComponent({isLoading}){
  if(!isLoading) return null

  return (
    <div className="loading-interface">
      <div className="loading-styles"></div>
      <p>Entrando...</p>
    </div>
  )
}