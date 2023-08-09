import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SubHeader from "./components/Subheader";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { createPerson, deletePerson, getAll, updatePerson } from "./server";

const App = () => {
  const [persons, setPersons] = useState([]);
  console.log("🚀 ~ file: App.js:11 ~ App ~ persons:", persons)
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
      const confirm = window.confirm(`${newContact.name} is already added to phonebook, replace the old number with a new one?`);
      const personToUpdate = persons.find((person) => person.name === newContact.name);
      confirm ? updatePerson(personToUpdate.id, newContact).then((res) => {
        const updatedPersons = persons.filter((person) => person.id !== personToUpdate.id);
        setPersons([...updatedPersons, res]);
      }) : alert("Update cancelled");
    } else if (newContact.name === "") {
      alert("Please enter a name");
      return;
    } else if (newContact.number === "") {
      alert("Please enter a number");
      return;
    } else {
      setNewContact({ name: "", number: "" });
      createPerson(newContact).then(res => setPersons([...persons, res]))
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
