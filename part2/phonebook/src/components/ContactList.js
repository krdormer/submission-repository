const ContactList = ({ contacts, onClick }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.name}>
        {contact.name} {contact.number} <button onClick={() => onClick(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
