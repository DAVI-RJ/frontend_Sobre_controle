import { useHeader } from "@/core/hooks/useHeader";
import ErrorMessage from "@/shared/components/atoms/errors/ErrorMessage";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

/* Cabeçalho da aplicação, exibe informações da empresa e ações relacionadas, como logout limpando o cache, utiliza icones do material UI
 */

import "./header.css";

export default function HeaderComponent() {
  const { companyName, handleLogout } = useHeader();

  /* tratando erros locais*/
  const isError = <ErrorMessage />;

  return (
    <header className="header-layout">
      <div className="header-search">
        <SearchIcon className="search-icon" />

        <input type="text" placeholder="Buscar produtos, clientes, pedidos..." />
      </div>
      <div className="header-actions">
        <button className="header-action">
          <NotificationsNoneIcon />
          <span className="notification-badge">{}</span>
        </button>

        <button className="header-action">
          <CalendarMonthIcon />
        </button>
      </div>
      <div className="header-profile">
        {isError ? (
          <div className="profile-avatar">U</div>
        ) : (
          <div className="profile-avatar">{companyName?.charAt(0).toUpperCase() || "U"}</div>
        )}
        <strong>{companyName || "Empresa"}</strong>

        <span>Administrador</span>
        <button className="logout-button" onClick={handleLogout}>
          {" "}
          sair
        </button>
      </div>
    </header>
  );
}
/*

  <div className="logo-perfil">
    {companyName ? <p>{companyName ?? "—"}</p> : <ErrorMessage />}
  </div>
*/
