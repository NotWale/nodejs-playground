export default (txs = {}, action) => {
  switch (action.type) {
    case "FETCH_ADD":
      return action.payload;
    default:
      return txs;
  }
};
