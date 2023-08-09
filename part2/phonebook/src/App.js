import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import SubHeader from "./components/Subheader";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  console.log("🚀 ~ file: App.js:11 ~ App ~ persons:", persons);
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

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  }, []);

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
      {persons && <ContactList contacts={persons} />}
    </div>
  );
};

export default App;
