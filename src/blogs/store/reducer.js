import _ from "lodash";
import { create, remove, update, startAnOperation } from "./action";
import { createReducer } from "redux-starter-kit";

const initialState = { list: [], isLoading: false };

const reducer = createReducer(initialState, {
  [startAnOperation]: (state, action) => {
    state.isLoading = true;
  },
  [create]: (state, action) => {
    state.list.push(action.payload);
    state.isLoading = false;
  },
  [update]: (state, action) => {
    state.list[state.list.findIndex(blog => blog.id == action.payload.id)] =
      action.payload;
    state.isLoading = false;
  },
  [remove]: (state, action) => {
    state.list.splice(
      state.list.findIndex(blog => blog.id == action.payload),
      1
    );
    state.isLoading = false;
  }
});

export default reducer;
