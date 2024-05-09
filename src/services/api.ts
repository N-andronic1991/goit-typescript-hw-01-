import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export const requestImagesByQuery = async (
  searchQuery: string = '',
  page: number = 1
) => {
  const { data } = await instance.get(
    '/search/photos/?client_id=W3DekvXqqEyHuYfXcV4nNJjY3B1bno-w0I4VshREHEk',
    {
      params: {
        query: searchQuery,
        page: page,
        per_page: 12,
      },
    }
  );

  return data;
};
