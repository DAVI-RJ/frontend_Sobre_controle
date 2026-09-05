import ActionButton from "../../atoms/button/ActionButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableAction({ item, actions: { delete: onDelete, edit: onEdit } }) {
  return (
    <div className="table-actions">
      <ActionButton
        icon={<DeleteIcon />}
        label="Excluir produto"
        onClick={() => onDelete(item.id)}
      />
      <ActionButton icon={<EditIcon />} label={"Editar produto"} onClick={() => onEdit(item)} />
    </div>
  );
}
