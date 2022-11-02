import api from 'services';

export const getAllMarmitaOrders = async (filter) => {
  try {
    const response = await api.get('/lunchs/orders', { params: filter });

    return response.data;
  } catch (error) {
    throw new Error('Ouve um problema com a chamada ');
  }
};

export const getMarmitaOrder = async (id) => {
  try {
    const response = await api.get(`/lunchs/orders/${id}`);

    return response.data;
  } catch (error) {
    throw new Error('Ouve um problema com a chamada ');
  }
};

export const createMarmitaOrder = async (data) => {
  try {
    const response = await api.post('/lunchs/orders', data);

    return response.data;
  } catch (error) {
    throw new Error('Ouve um problema com a chamada ');
  }
};

export const editMarmitaOrder = async ({ id, data }) => {
  try {
    const response = await api.put(`/lunchs/orders/${id}`, data);

    return response.data;
  } catch (error) {
    throw new Error('Ouve um problema com a chamada ');
  }
};
export const deleteMarmitaOrder = async (id) => {
  try {
    const response = await api.delete(`/lunchs/orders/${id}`);

    return response.data;
  } catch (error) {
    throw new Error('Ouve um problema com a chamada ');
  }
};
