import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '80053bce-5c0b-43d1-a8d8-e6660e009434'
    }
})

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`);
    },
    login({ email, password, rememberMe, captcha }) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const taskListsAPI = {
    getTaskLists() {
        return instance.get(`todo-lists`);
    },
    addNewTaskList(title) {
        return instance.post(`todo-lists`, title)
    },
    deleteTaskList(todolistId) {
        return instance.delete(`todo-lists/` + todolistId)
    },
    updateTaskListTitle(todolistId, title) {
        return instance.put(`todo-lists/` + todolistId, title);
    }
}