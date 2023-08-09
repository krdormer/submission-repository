import axios from "axios";

// GET //
export const getAll = () => axios.get("http://localhost:3001/persons").then((res) => res.data);

// POST //
export const createPerson = (newPerson) => axios.post("http://localhost:3001/persons", newPerson).then((res) => res.data);

// DELETE //
export const deletePerson = (id) => axios.delete(`http://localhost:3001/persons/${id}`);