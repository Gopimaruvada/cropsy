// store/reducers/apiReducer.js
const initialState = {
    rowReports: [],
    filteredBlocks: [],
  };
  
  const apiReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_ROW_REPORTS':
        return { ...state, rowReports: action.payload };
      case 'SET_FILTERED_BLOCKS':
        return { ...state, filteredBlocks: action.payload };
      default:
        return state;
    }
  };
  
  export default apiReducer;
  