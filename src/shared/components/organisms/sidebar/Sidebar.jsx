import React, { useState } from "react";
import ButtonComponent from "../../atoms/button/Button";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GroupsIcon from "@mui/icons-material/Groups";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import "./sidebar.css";

const sidebarSections = [
  {
    id: "management",
    label: "Gestão",
    items: [
      {
        id: "products",
        label: "Produtos",
        view: "list-products",
        icon: <CardGiftcardIcon />,
      },
      {
        id: "customers",
        label: "Clientes",
        view: "list-customer",
        icon: <PeopleAltIcon />,
      },
      {
        id: "suppliers",
        label: "Fornecedores",
        view: "list-supplier",
        icon: <GroupsIcon />,
      },
      {
        id: "orders",
        label: "Pedidos",
        view: "list-orders",
        icon: <LocalShippingOutlinedIcon />,
      },
      {
        id: "sales",
        label: "Vendas",
        view: "list-sales",
        icon: <PointOfSaleOutlinedIcon />,
      },
      {
        id: "purchases",
        label: "Compras",
        view: "list-purchases",
        icon: <ShoppingCartOutlinedIcon />,
      },
      {
        id: "stock",
        label: "Estoque",
        view: "stock",
        icon: <Inventory2OutlinedIcon />,
      },
    ],
  },

  {
    id: "financial",
    label: "Financeiro",
    items: [
      {
        id: "financial",
        label: "Financeiro",
        view: "financial",
        icon: <AccountBalanceWalletOutlinedIcon />,
      },
      {
        id: "accounts-payable",
        label: "Contas a pagar",
        view: "accounts-payable",
      },
      {
        id: "accounts-receivable",
        label: "Contas a receber",
        view: "accounts-receivable",
      },
      {
        id: "reports",
        label: "Relatórios",
        view: "reports",
      },
    ],
  },

  {
    id: "settings",
    label: "Configurações",
    items: [
      {
        id: "company",
        label: "Empresa",
        view: "company-settings",
      },
      {
        id: "users",
        label: "Usuários",
        view: "users-settings",
      },
      {
        id: "permissions",
        label: "Permissões",
        view: "permissions",
      },
    ],
  },
];

export default function SidebarComponent({ setView }) {
  const [openSections, setOpenSections] = useState({
    management: true,
    financial: false,
    settings: false,
  });

  const toggleSection = (sectionId) => {
    setOpenSections((previous) => ({
      ...previous,
      [sectionId]: !previous[sectionId],
    }));
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <aside className="sidebar" aria-label="Menu principal">
      {/* IDENTIDADE DA APLICAÇÃO */}
      <header className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">SC</div>

          <div className="sidebar-brand-info">
            <strong>Sobre Controle</strong>
            <span>Business Network</span>
          </div>
        </div>
      </header>

      {/* NAVEGAÇÃO */}
      <nav className="sidebar-navigation" aria-label="Navegação principal">
        {sidebarSections.map((section) => {
          const isOpen = openSections[section.id];

          return (
            <section
              key={section.id}
              className={`sidebar-section ${isOpen ? "sidebar-section--open" : ""}`}
            >
              <ButtonComponent
                type="button"
                className="sidebar-section-button"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
                aria-controls={`sidebar-${section.id}`}
              >
                <span className="sidebar-section-label">{section.label}</span>
              </ButtonComponent>

              {isOpen && (
                <ul id={`sidebar-${section.id}`} className="sidebar-menu">
                  {section.items.map((item) => (
                    <li key={item.id} className="sidebar-menu-item">
                      <ButtonComponent
                        type="button"
                        className="sidebar-menu-button"
                        onClick={() => handleViewChange(item.view)}
                      >
                        <span className="sidebar-menu-icon">{item.icon}</span>
                        <span>{item.label}</span>
                      </ButtonComponent>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </nav>

      {/* PLANO / CONTA */}
      <footer className="sidebar-footer">
        <div className="sidebar-plan">
          <div className="sidebar-plan-header">
            <span className="sidebar-plan-label">PLANO ATUAL</span>

            <span className="sidebar-plan-status">ATIVO</span>
          </div>

          <strong className="sidebar-plan-name">Profissional</strong>

          <div className="sidebar-plan-progress">
            <span />
          </div>

          <div className="sidebar-plan-info">
            <span>Recursos utilizados</span>
            <span>72%</span>
          </div>

          <ButtonComponent
            type="button"
            className="sidebar-plan-button"
            onClick={() => handleViewChange("plan-settings")}
          >
            Gerenciar plano
          </ButtonComponent>
        </div>
      </footer>
    </aside>
  );
}

