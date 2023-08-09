import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SubHeader from "./components/Subheader";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Notification from "./components/Notification";
import { createPerson, deletePerson, getAll, updatePerson } from "./server";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [message, setMessage] = useState({ message: "", type: "" });

  const handleShowMessage = (message, type) => {
    setMessage({ message, type });
    setInterval(() => {
      setMessage("");
    }, 5000);
  };

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

  const handleUpdateContact = () => {
    const confirm = window.confirm(`${newContact.name} is already added to phonebook, replace the old number with a new one?`);
    const personToUpdate = persons.find((person) => person.name === newContact.name);
    if(confirm) {
      return updatePerson(personToUpdate.id, newContact).then((res) => {
        const updatedPersons = persons.filter((person) => person.id !== personToUpdate.id);
        setPersons([...updatedPersons, res]);
        handleShowMessage(`Updated ${res.name}`, "success");
      }).catch(err => {
        console.log(err);
        return handleShowMessage(`Error updating ${personToUpdate.name}`, "error");
      });
    } else { 
      return handleShowMessage("Update cancelled", "success");
    }
  };

  const handleAddContact = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newContact.name)) {
      handleUpdateContact();
      return;
    } else if (newContact.name === "") {
      handleShowMessage("Please enter a name", "error");
      return;
    } else if (newContact.number === "") {
      handleShowMessage("Please enter a number", "error");
      return;
    } else {
      // Add new contact
      setNewContact({ name: "", number: "" });
      createPerson(newContact).then(res => setPersons([...persons, res]));
      handleShowMessage(`Added ${newContact.name}`, "success");
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
      handleShowMessage(`Deleted person ${id}`, "success");
    })
    :
    handleShowMessage("Delete cancelled", "success");
  }

  return (
    <div>
      <Header title="Phonebook" />
      {message.message && <Notification message={message.message} type={message.type} />}
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
