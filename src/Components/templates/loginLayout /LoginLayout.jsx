import ContainerComponent from "../../organisms/container/Container"

import "./LoginLayout.css"; 

export default function LoginLayout({children}){

  return (
    <div className="login-class">
      <ContainerComponent>
        {children}
      </ContainerComponent>
    </div>
  )
}