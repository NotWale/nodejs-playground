import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAddress = () => async (dispatch) => {
  try {
    const { data } = await api.showAddress();

    dispatch({ type: "FETCH_ADD", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// export const register = (name, pass) => async (dispatch) => {
//   try {
//     const { data } = await api.register(name, pass);

//     dispatch({ type: "REGISTER", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const login = (name, pass) => async (dispatch) => {
//   try {
//     const { data } = await api.login(name, pass);
//     if (data.status === "ok") {
//       dispatch({ type: "LOGIN", payload: data });
//     } else {
//       console.log("Failed to login: ", data);
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };
