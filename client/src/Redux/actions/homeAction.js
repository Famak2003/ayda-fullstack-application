export const GET_ALL_HOME_CONTENT = 'GET_ALL_HOME_CONTENT';

export const getAllHomeContent = (data) => ({
  type: GET_ALL_HOME_CONTENT,
  payload: data,
});
