import api from '@/lib/axiosInstance';
import { User } from '@/store/auth';
import { useQuery } from '@tanstack/react-query';

export const getMe = async (): Promise<User> => {
  const response = await api.get('/api/user/me');
  return response.data;
};

export const useGetMe = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(),
    enabled,
  });
};
