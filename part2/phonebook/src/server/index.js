import axios from "axios";

// GET //
export const getAll = () => axios.get("http://localhost:3001/persons").then((res) => res.data);

// POST //
export const createPerson = (newPerson) => {
  const id = Math.floor(Math.random() * 1000000);
  const newPersonWithId = { ...newPerson, id}
  return axios.post("http://localhost:3001/persons", newPersonWithId).then((res) => res.data);
}

// DELETE //
export const deletePerson = (id) => axios.delete(`http://localhost:3001/persons/${id}`);

// PUT //
export const updatePerson = (id, updatedPerson) => axios.put(`http://localhost:3001/persons/${id}`, updatedPerson).then((res) => res.data);