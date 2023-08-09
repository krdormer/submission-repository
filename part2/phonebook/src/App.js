import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SubHeader from "./components/Subheader";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { createPerson, deletePerson, getAll } from "./server";

const App = () => {
  const [persons, setPersons] = useState([]);
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
      createPerson(newContact);
    }
  };

  useEffect(() => {
    getAll().then((data) => setPersons(data));
  }, []);

  const handleDeleteContact = (id) => {
    window.confirm(`Are you sure you want to delete person ${id}?`)
    ?
    deletePerson(id).then(() => {
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
    })
    :
    alert("Delete cancelled");
  }

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
      {persons && <ContactList contacts={persons} onClick={handleDeleteContact} />}
    </div>
  );
};

export default App;
