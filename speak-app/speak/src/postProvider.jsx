import { createContext, useContext, useReducer } from "react";
export const PostContext = createContext();
export const usePostProvider = () => useContext(PostContext);

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_POST":
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  posts: [],
  post: {},
};
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
