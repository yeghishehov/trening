import axios from '../utils/axiosConfig';

export const feedbackRequest = {
  add: (form) => axios.post('/feedback/add', { ...form })
    .then((res) => res.data),
  getAll: () => axios.get('/feedback/getAll')
    .then((res) => res.data),
  delete: (deleteItems) => axios.post('/feedback/delete', { deleteItems })
    .then((res) => res.data),
  viewed: (id) => axios.post('/feedback/viewed', { id })
    .then((res) => res.data),
};

export const learnerRequest = {
  add: (form) => axios.post('/learner/add', { ...form })
    .then((res) => res.data),
  getAll: () => axios.get('/learner/getAll')
    .then((res) => res.data),
  delete: (deleteItems) => axios.post('/learner/delete', { deleteItems })
    .then((res) => res.data),
  viewed: (id) => axios.post('/learner/viewed', { id })
    .then((res) => res.data),
};

export const adminRequest = {
  login: (form) => axios.post('/admin/auth/login', { ...form })
    .then((res) => res.data),
  changePassword: (form) => axios.post('/admin/auth/change-password', { ...form })
    .then((res) => res.data),
  checkToken: () => axios.get('/admin/auth/check-token')
    .then((res) => res.data),
};

export const coursesRequest = {
  add: (formData) => axios.post('/courses/add', formData)
    .then((res) => res.data),
  delete: (deleteItems) => axios.post('/courses/delete', { deleteItems })
    .then((res) => res.data),
  edit: (formData) => axios.post('/courses/edit', formData)
    .then((res) => res.data),
  get: () => axios.get('/courses/get')
    .then((res) => res.data),
};

export const trainersRequest = {
  add: (formData) => axios.post('/trainers/add', formData)
    .then((res) => res.data),
  delete: (deleteItems) => axios.post('/trainers/delete', { deleteItems })
    .then((res) => res.data),
  edit: (formData) => axios.post('/trainers/edit', formData)
    .then((res) => res.data),
  get: () => axios.get('/trainers/getAll')
    .then((res) => res.data),
};
