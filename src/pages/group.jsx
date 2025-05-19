import React, { useState } from "react";
import ContactList from "../components/ContactList/ContactList"
import allContacts from "../contacts" // זה הנתונים הקבועים

export default function Group() {
  const [filter, setFilter] = useState("");

  const filteredContacts =
    filter === ""
      ? allContacts
      : allContacts.filter((c) => c.relation === filter);

  return (
    <div>
      <h1>Group</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("")}>הצג הכול</button>
        <button onClick={() => setFilter("חבר")}>חבר</button>
        <button onClick={() => setFilter("חברה")}>חברה</button>
        <button onClick={() => setFilter("בן משפחה")}>בן משפחה</button>
        <button onClick={() => setFilter("חבר מהעבודה")}>חבר מהעבודה</button>
      </div>

      <ContactList contacts={filteredContacts} />
    </div>
  );
}
