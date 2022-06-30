export default (users = {}, action) => {
  switch (action.type) {
    case "REGISTER":
      return action.payload;
    case "LOGIN":
      return action.payload;
    default:
      return users;
  }
};
