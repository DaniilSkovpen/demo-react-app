import { UsersAPI } from "../api/api";
import { updateObjectInArray } from "../Utils/objects-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SEt-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [2],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };
   
      case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    
      case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };
    
      default:
      return state;
  }
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });

export const unFollowSuccess = (userID) => ({ type: UNFOLLOW, userID });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  count: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userID,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await UsersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount));
  dispatch(setCurrentPage(currentPage));
};

const followUnfollowFlow = async (dispatch, Id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, Id));
  let data = await apiMethod(Id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(Id));
  }
  dispatch(toggleFollowingProgress(false, Id));
};

export const Follow = (Id) => async (dispatch) => {
    followUnfollowFlow(dispatch, Id, UsersAPI.Follow.bind(UsersAPI), followSuccess);
};

export const unFollow = (Id) => async (dispatch) => {
    followUnfollowFlow(dispatch, Id, UsersAPI.UnFollow.bind(UsersAPI), unFollowSuccess);
};

export default usersReducer;
