import axios from "axios";
const BASE_URL = '/api';

// GET //
export const getAll = () => axios.get(`${BASE_URL}/persons`).then((res) => res.data);

// POST //
export const createPerson = (newPerson) => {
  const id = Math.floor(Math.random() * 1000000);
  const newPersonWithId = { ...newPerson, id}
  return axios.post(`${BASE_URL}/persons`, newPersonWithId).then((res) => res.data);
}

// DELETE //
export const deletePerson = (id) => axios.delete(`${BASE_URL}/persons/${id}`);

// PUT //
export const updatePerson = (id, updatedPerson) => axios.put(`${BASE_URL}/persons/${id}`, updatedPerson).then((res) => res.data);