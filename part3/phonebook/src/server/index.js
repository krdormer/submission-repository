import axios from "axios";
const BASE_URL = "https://fso-phonebook-backend-t308.onrender.com";

// GET //
export const getAll = () => axios.get(`${BASE_URL}/api/persons`).then((res) => res.data);

// POST //
export const createPerson = (newPerson) => {
  const id = Math.floor(Math.random() * 1000000);
  const newPersonWithId = { ...newPerson, id}
  return axios.post(`${BASE_URL}/api/persons`, newPersonWithId).then((res) => res.data);
}

// DELETE //
export const deletePerson = (id) => axios.delete(`${BASE_URL}/api/persons/${id}`);

// PUT //
export const updatePerson = (id, updatedPerson) => axios.put(`${BASE_URL}/api/persons/${id}`, updatedPerson).then((res) => res.data);