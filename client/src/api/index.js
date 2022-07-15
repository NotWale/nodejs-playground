import axios from "axios";

const url = "http://localhost:5000/posts";
const registerurl = "http://localhost:5000/register";
const loginurl = "http://localhost:5000/login";
const rpcurl = "http://localhost:5000/rpc";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const register = (name, pass) => axios.post(registerurl, name, pass);
export const login = (name, pass) => axios.post(loginurl, name, pass);

//export const sendTx = (price) => axios.post(`${rpcurl}/${price}`);

export const showAddress = () => axios.post(rpcurl);