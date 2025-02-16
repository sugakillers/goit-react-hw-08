import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://67ae2c209e85da2f020cb19c.mockapi.io/',
});

export const getContact = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const data = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContact = async contact => {
  const data = await instance.post(`/contacts`, contact);
  return data;
};