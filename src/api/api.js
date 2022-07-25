import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": '63e918ae-831a-4ac3-bd2a-3fafdffaff41' }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    Follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    UnFollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    GetUserProfile(userID) {
        console.warn('Obsolete method. Use ProfileAPI')
        return instance.get(`profile/${userID}`)
    },
}

export const AuthAPI = {
    Auth() {
        return instance.get('auth/me').then(response => {
            return response.data;
        });
    },
    login(email, password, rememberMe=false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    },
}

export const ProfileAPI = {
    GetUserProfile(userID) {
    return instance.get(`profile/${userID}`)
    },
    GetUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}