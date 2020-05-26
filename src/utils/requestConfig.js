export const reqConfig = getState => {
  //* Get token from localStorage
  const token = getState().auth.token;
  //* set up headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //* If token existed, add to headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};