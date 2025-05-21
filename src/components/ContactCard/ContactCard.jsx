import { useState } from "react";
import styles from "./ContactCard.module.css";
import EditContactModal from "../EditContactModal/EditContactModal";

export default function ContactCard({ contact, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSave = (updated) => {
    onEdit(updated);
    setShowEdit(false);
  };

  return (
    <div className={styles.card}>
      <img src={contact.image} alt="user" className={styles.image} />
      <div className={styles.info}>
        <h3>
          {contact.firstName} {contact.lastName}
        </h3>
        <p>📞 {contact.phone}</p>
        <p>קרבה: {contact.relation}</p>
        <div className={styles.actions}>
          <button onClick={() => setShowEdit(true)}>שנה פרטים</button>
          <button onClick={() => onDelete(contact.id)} className={styles.delete} >
            מחק
          </button>
        </div>
      </div>

      {showEdit && (
        <EditContactModal
          contact={contact}
          onSave={(updatedContact) => {
            onEdit(updatedContact);
            setShowEdit(false);
          }}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  );
}
