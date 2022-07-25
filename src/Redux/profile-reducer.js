import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, How are u", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 33 },
    { id: 1, message: "Hi, How are u", likesCount: 12 },
    { id: 1, message: "Hi, How are u", likesCount: 12 },
  ],

  newPostText: "Dante the best",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const setPostDelete = (postId) => ({ type: DELETE_POST, postId });

export const UserProfile = (userID) => async (dispatch) => {
  let response = await ProfileAPI.GetUserProfile(userID);
  dispatch(setUserProfile(response.data));
};

export const UserStatus = (userID) => async (dispatch) => {
  let response = await ProfileAPI.GetUserStatus(userID);
  dispatch(setUserStatus(response.data));
};

export const UpdateUserStatus = (status) => async (dispatch) => {
  let response = await ProfileAPI.updateUserStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
