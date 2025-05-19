import ContactCard from "../ContactCard/ContactCard";
import { useState, useEffect } from "react";

export default function ContactList({ contacts }) {
  const [contactList, setContactList] = useState(contacts);

  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);

  const handleEdit = (updatedContact) => {
    setContactList((prev) =>
      prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק?");
    if (confirmed) {
      setContactList((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div>
      {contactList.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
