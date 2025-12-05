import { QueryClient } from '@tanstack/react-query';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

export const apiClient = {
  get: (url: string) => fetch(`${API_BASE_URL}${url}`).then(res => res.json()),
  post: (url: string, data: any) => fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  put: (url: string, data: any) => fetch(`${API_BASE_URL}${url}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (url: string) => fetch(`${API_BASE_URL}${url}`, { method: 'DELETE' }),
};

export const queryClient = new QueryClient();