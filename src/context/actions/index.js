export const setToken = (payload) => ({
  type: 'SET_TOKEN',
  payload,
});

export const setId = (payload) => ({
  type: 'SET_ID',
  payload,
});

export const getToken = ({ dispatch }) => {
  try {
    const token = window.localStorage.getItem('trello_token');
    if (token) {
      dispatch(setToken(token));
      return;
    }
    dispatch(setToken(''));
  } catch (error) {
    dispatch(setToken(''));
  }
}