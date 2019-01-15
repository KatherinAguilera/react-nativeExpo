function videos(state = {}, action) {
  //llegan las acciones
switch (action.type) {
    case 'SET_SEGGESTION_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export default videos;