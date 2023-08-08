import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SubHeader from "./components/Subheader";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  const handleFilter = (event) => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    return setPersons(filteredPersons);
  };

  const handleContactChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddContact = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newContact.name)) {
      alert(`${newContact.name} is already added to phonebook`);
      return;
    } else if (newContact.name === "") {
      alert("Please enter a name");
      return;
    } else if (newContact.number === "") {
      alert("Please enter a number");
      return;
    } else {
      setPersons([...persons, newContact]);
      setNewContact({ name: "", number: "" });
    }
  };

  return (
    <div>
      <Header title="Phonebook" />
      <Filter value={newContact.filter} onChange={handleFilter} />
      <SubHeader subheader="Add a New Contact" />
      <Form
        onSubmit={handleAddContact}
        onChange={handleContactChange}
        newContact={newContact}
      />
      <SubHeader subheader="Numbers" />
      <ContactList contacts={persons} />
    </div>
  );
};

export default App;
