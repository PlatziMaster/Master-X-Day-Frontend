const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    default: return state;
  }
};

export default reducer;
