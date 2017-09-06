import data from '../../data/mktdata.json';

export const defaultState = {
  data: data.mktData
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
