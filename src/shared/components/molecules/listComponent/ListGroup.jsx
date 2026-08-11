import "./list-group.css"; 

export default function ListComponent({ children }) {
  return (
    <div>
      <h2>Lista de Clientes</h2>
      {children}
    </div>
  )
}