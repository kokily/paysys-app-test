import axios from 'axios';

export async function readWeddingAPI(id: string) {
  const response = await axios.get<ReadWeddingResponse>(`/api/weddings/${id}`);
  return response.data;
}

export async function removeWeddingAPI(id: string) {
  const response = await axios.delete(`/api/weddings/remove/${id}`);
  return response.data;
}

// Add Sign API
export async function addSignAPI(payload: AddSignPayload) {
  const response = await axios.post('/api/sign', payload);
  return response.data;
}

// Remove Sign API
export async function removeSignAPI(id: string) {
  const response = await axios.delete(`/api/sign/remove/${id}`);
  return response.data;
}
