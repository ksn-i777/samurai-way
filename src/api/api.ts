import axios from 'axios';

export const commonAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2606b888-8484-4e56-ac3e-483848e15f9a' 
    }
})

export const authAPI = {
    getAuthUser() {
        return commonAxiosInstance.get(`auth/me`).then(res => res.data)
    },
}

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return commonAxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    createFollow(id: string) {
        return commonAxiosInstance.post(`follow/${id}`, {}).then(res => res.data)
    },
    deleteFollow(id: string) {
        return commonAxiosInstance.delete(`follow/${id}`).then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(id:number) {
        return commonAxiosInstance.get(`profile/${id}`).then(res => res.data)
    },
    getProfileStatus(id:number) {
        return commonAxiosInstance.get(`profile/status/${id}`).then(res => res)
    },
    updateProfileStatus(status:string) {
        return commonAxiosInstance.put('profile/status', {status}).then(res => res.data)
    },
}