import type { Wedding } from '@prisma/client';
import axios from 'axios';

// Add Expense API
export async function addExpenseAPI(payload: ExpenseType) {
  const response = await axios.post<Wedding>(`/api/expense`, payload);
  return response.data;
}

// Update Expense API
export async function updateExpenseAPI({
  id,
  payload,
}: {
  id: string;
  payload: ExpenseType;
}) {
  const response = await axios.put<Wedding>(`/api/expense/${id}`, payload);
  return response.data;
}
