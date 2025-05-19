import ContactList from "../components/ContactList/ContactList";
import contacts from "../contacts"
export default function Contact() {
  return (
    <div>
     
      <ContactList contacts={contacts} />

    </div>
  );
}
