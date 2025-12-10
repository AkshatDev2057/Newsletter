import { vi } from 'vitest';
import { apiClient, queryClient } from '../../../src/services/api';

// Mock fetch globally
global.fetch = vi.fn();

describe('API Client', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (global.fetch as any).mockClear();
  });

  describe('get', () => {
    it('should make GET request with correct URL', async () => {
      const mockResponse = { data: 'test' };
      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse)
      });

      const result = await apiClient.get('/test-endpoint');

      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/test-endpoint');
      expect(result).toEqual(mockResponse);
    });

    it('should handle fetch errors', async () => {
      const error = new Error('Network error');
      (global.fetch as any).mockRejectedValueOnce(error);

      await expect(apiClient.get('/test-endpoint')).rejects.toThrow('Network error');
    });

    it('should handle API response errors', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: () => Promise.resolve({ error: 'Not found' })
      });

      const result = await apiClient.get('/test-endpoint');
      expect(result).toEqual({ error: 'Not found' });
    });
  });

  describe('post', () => {
    it('should make POST request with correct data', async () => {
      const mockResponse = { id: 1, name: 'test' };
      const requestData = { name: 'test' };

      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse)
      });

      const result = await apiClient.post('/test-endpoint', requestData);

      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/test-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('put', () => {
    it('should make PUT request with correct data', async () => {
      const mockResponse = { id: 1, name: 'updated' };
      const requestData = { name: 'updated' };

      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse)
      });

      const result = await apiClient.put('/test-endpoint/1', requestData);

      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/test-endpoint/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('delete', () => {
    it('should make DELETE request', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        json: () => Promise.resolve({ success: true })
      });

      const result = await apiClient.delete('/test-endpoint/1');

      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/test-endpoint/1', {
        method: 'DELETE'
      });
      expect(result).toEqual({ success: true });
    });
  });
});

describe('Query Client', () => {
  it('should export a QueryClient instance', () => {
    expect(queryClient).toBeDefined();
    expect(typeof queryClient).toBe('object');
  });
});