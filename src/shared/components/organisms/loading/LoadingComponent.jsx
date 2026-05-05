import "./loading-class.css"; 

// recebe um booleano como props e exibe o componente 
export default function LoadingComponent({isLoading}){
  if(!isLoading) return null

  return (
    <div className="loading-interface">
      <div className="loading-styles"></div>
      <p>Entrando...</p>
    </div>
  )
}