import TableAction from "../../molecules/tableActions/TableAction";

import "./data-table.css";

/**Esse componente tem uma reposabilidade clara, não conhecer nada sobre os dados, mas orquestrar e organizar visualmente os mesmo */
export default function DataTable({ columns, data, getRowKey, actions }) {
  return (
    <>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={getRowKey(item, index)}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.type === "actions" ? (
                      <TableAction item={item} actions={actions}></TableAction>
                    ) : column.render ? (
                      column.render(item)
                    ) : (
                      item[column.key]
                    )}{" "}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="">
                Nenhum registro encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
