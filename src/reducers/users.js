import { Types } from '../actions/users'

const initialState = {
  items: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_USERS_REQUEST:
      return { items: payload.items }

    default:
      return state
  }
}
