import { createContext, useContext, useReducer } from "react";
export const PostContext = createContext();
export const usePostProvider = () => useContext(PostContext);

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "POSTS":
      return {
        ...state,
        postInfo: [...state.postInfo, action.payload],
      };
    case "LIKES":
      return {
        ...state,
        likes: state.likes + action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  postInfo: [],
  likes: 0,
};
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
