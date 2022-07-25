import { createSelector } from "reselect"

/**
 * "getUsersData" returns the users array from the state.usersPage.users object.
 * @param state - the state of the application.
 */
export const getUsersData = (state) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsersData,(users) => {
    return users; 
})
 
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getUserAuth = (state) => {
    return state.auth.isAuth
}