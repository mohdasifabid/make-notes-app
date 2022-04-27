import { createContext, useContext, useReducer } from "react";
const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);

const videoReducer = (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload],
      };
    case "GET_WATCH_LATER_VIDEOS":
      return {
        ...state,
        watchlaterVideos: [...state.watchlaterVideos, action.payload],
      };
    case "GET_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };
    case "GET_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    // case "GET_A_VIDEO":
    //   return {
    //     ...state,
    //     aVideo: action.payload,
    //   };

    // case "SET_LIKES":s
    //   return {
    //     ...state,
    //     setLikes: state.setLikes + action.payload,
    //   };
    // case "SET_DISLIKES":
    //   return {
    //     ...state,
    //     setDislikes: state.setDislikes + action.payload,
    //   };
    // case "WATCH_LATER":
    //   return {
    //     ...state,
    //     setWatchLater: [...state.setWatchLater, action.payload],
    //   };
    // case "ADD_TO_PLAYLIST":
    //   return {
    //     ...state,
    //     setPlaylist: [...state.setPlaylist, action.payload],
    //   };

    default:
      state;
  }
};

const initialState = {
  videos: [],
  categories: [],
  likedVideos: [],
  watchlaterVideos: [],
  playlist: [],
  history: [],

  // aVideo: {},
  // setLikes: 0,
  // setDislikes: 0,
  // setWatchLater: [],
  // setPlaylist: [],
};
const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoProvider, useVideo };
