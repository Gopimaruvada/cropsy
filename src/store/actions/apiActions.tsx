// store/actions/apiActions.js
export const setRowReports = (rowReports:any) => ({
    type: 'SET_ROW_REPORTS',
    payload: rowReports,
  });
  
  export const setFilteredBlocks = (filteredBlocks:any) => ({
    type: 'SET_FILTERED_BLOCKS',
    payload: filteredBlocks,
  });
  