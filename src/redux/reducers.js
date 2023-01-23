const initialState = {
  dataList: {}
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATALIST':
      return { ...state, dataList: action.payload }
    default:
      return state
  }
}
