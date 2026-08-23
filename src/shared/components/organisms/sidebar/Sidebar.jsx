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
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";

import "./sidebar.css";

const sidebarSections = [
  {
    id: "management",
    label: "Gestão",
    items: [
      {
        id: "products",
        label: "Produtos",
        icon: <CardGiftcardIcon />,
        subItems: [
          { label: "Lista de Produtos", view: "list-products", icon: <FormatListBulletedIcon /> },
          { label: "Novo Produto", view: "new-product", icon: <AddIcon /> },
        ],
      },
      {
        id: "customers",
        label: "Clientes",
        icon: <PeopleAltIcon />,
        subItems: [
          { label: "Lista de Cliente", view: "list-customer", icon: <FormatListBulletedIcon /> },
          { label: "Novo Cliente", view: "new-customer", icon: <AddIcon /> },
        ],
      },
      {
        id: "suppliers",
        label: "Fornecedores",
        icon: <GroupsIcon />,
        subItems: [
          {
            label: "Lista de Fornecedores",
            view: "list-supplier",
            icon: <FormatListBulletedIcon />,
          },
          { label: "Novo Fornecedor", view: "new-supplier", icon: <AddIcon /> },
        ],
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
  const [openItems, setOpenItems] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((previous) => ({
      ...previous,
      [sectionId]: !previous[sectionId],
    }));
  };

  const toggleItem = (itemId) => {
    setOpenItems((previous) => ({
      ...previous,
      [itemId]: !previous[itemId],
    }));
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <aside className="sidebar" aria-label="Menu principal">
      {/* Logotipo da aplicação saas*/}
      <header className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">SC</div>

          <div className="sidebar-brand-info">
            <strong>Sobre Controle</strong>
            <span>Business Network</span>
          </div>
        </div>
      </header>

      {/* navegação entre as funcionalidade */}
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
                  {section.items.map((item) => {
                    const isItemOpen = openItems[item.id];
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    return (
                      <li key={item.label} className="sidebar-menu-item">
                        <ButtonComponent
                          type="button"
                          className="sidebar-menu-button"
                          onClick={() => {
                            if (hasSubItems) {
                              toggleItem(item.id);
                            } else if (item.view) {
                              handleViewChange(item.view);
                            }
                          }}
                        >
                          <span className="sidebar-menu-icon">{item.icon}</span>
                          <span>{isItemOpen}</span>
                          {item.label}
                        </ButtonComponent>
                        {hasSubItems && isItemOpen && (
                          <ul className="submenu-items">
                            {item.subItems.map((subItem, index) => (
                              <li key={index} className="submenu-item">
                                <ButtonComponent
                                  type="button"
                                  className="submenu-button"
                                  onClick={() => handleViewChange(subItem.view)}
                                >
                                  <i className="submenu-icon">{subItem.icon}</i>
                                  {subItem.label}
                                </ButtonComponent>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
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
