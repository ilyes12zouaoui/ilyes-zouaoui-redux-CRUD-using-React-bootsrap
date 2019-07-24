import { createAction } from "redux-starter-kit";

export const startAnOperation = createAction("START_AN_OPERATION_BLOG");

export const create = createAction("CREATE_BLOG");

export const update = createAction("UPDATE_BLOG");

export const remove = createAction("REMOVE_BLOG");

export const createAsync = payload => dispatch => {
  dispatch(startAnOperation());

  setTimeout(() => {
    dispatch(create(payload));
  }, 1000);
};

export const updateAsync = payload => dispatch => {
  dispatch(startAnOperation());

  setTimeout(() => {
    dispatch(update(payload));
  }, 1000);
};
export const removeAsync = payload => dispatch => {
  dispatch(startAnOperation());

  setTimeout(() => {
    dispatch(remove(payload));
  }, 1000);
};
