export const setDataList = (data) => (dispatch) => {
  dispatch({
    type: 'SET_DATALIST',
    payload: data
  })
}