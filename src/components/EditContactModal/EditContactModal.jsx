import { useState } from "react";
import styles from "./EditContactModal.module.css";

export default function EditContactModal({ contact, onSave, onClose }) {
  const [formData, setFormData] = useState({ ...contact });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // שולח את העדכון החי חזרה למעלה
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ❌
        </button>
        <h2>עריכת איש קשר</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input name="phone" value={formData.phone} onChange={handleChange} />
          <input
            name="relation"
            value={formData.relation}
            onChange={handleChange}
          />
          <input name="image" value={formData.image} onChange={handleChange} />
          <button type="submit" className={styles.saveButton}>
            שמור
          </button>
        </form>
      </div>
    </div>
  );
}
