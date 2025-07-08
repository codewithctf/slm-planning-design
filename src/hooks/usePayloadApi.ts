import { useState } from 'react';

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
}

export function usePayloadApi<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const callApi = async (
    endpoint: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' = 'POST',
    body?: any,
    token?: string
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        ...(body ? { body: JSON.stringify(body) } : {})
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.message || 'API error');
        return { error: json.message, status: res.status };
      }
      setData(json);
      return { data: json, status: res.status };
    } catch (err: any) {
      setError(err.message || 'Network error');
      return { error: err.message, status: 0 };
    } finally {
      setLoading(false);
    }
  };

  return { callApi, loading, error, data };
}
