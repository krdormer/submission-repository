import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  const handleFilter = (event) => {
    console.log(event.target.value);
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
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          name="filter"
          onChange={handleFilter}
          value={newContact.filter}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name:{" "}
          <input
            name="name"
            onChange={handleContactChange}
            value={newContact.name}
          />
        </div>
        <div>
          number:{" "}
          <input
            name="number"
            onChange={handleContactChange}
            value={newContact.number}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
