// src/store/reducers/movieReducer.js
const initialState = {
    isLoading: true,
    // ... (다른 상태들)
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IS_LOADING':
        return { ...state, isLoading: action.payload };
      // ... (다른 액션들)
      default:
        return state;
    }
  };
  
  export default movieReducer;
  