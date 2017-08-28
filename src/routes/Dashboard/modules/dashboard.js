// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'
//export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function dashboardAddItem(value) {
  return {
    type    : DASHBOARD_ADD_ITEM,
    payload : value
  }
}

export function dashboardEditItem(value) {
  return {
    type    : DASHBOARD_EDIT_ITEM,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => ({
    ...state,
    visitCount: state.visitCount + action.payload
  }),
  [DASHBOARD_ADD_ITEM]   : (state, action) => {
    const mockedId = Math.floor(Date.now() / 1000)
    const newItem = {
      id: mockedId,
      label: action.payload.label
    }

    return {
      ...state,
      dashboardItems: [...state.dashboardItems, newItem]
    }
  },
  [DASHBOARD_EDIT_ITEM]   : (state, action) => {
    const { label, editItemIndex: index } = action.payload
    let newItem = {
      ...state.dashboardItems[index],
      label
    }

    const immutableDashboardItems = [
      ...state.dashboardItems.slice(0, index), newItem,
      ...state.dashboardItems.slice(index + 1)
    ]
    return {
      ...state, dashboardItems: immutableDashboardItems
    }
  }
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitCount: 0,
  dashboardItems: [
    {key: 0, label: 'Angular'},
    {key: 1, label: 'JQuery'},
    {key: 2, label: 'Polymer'},
    {key: 3, label: 'ReactJS'}
  ]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
