import { taskListsAPI } from "../api/api";

const SET_TASK_LISTS = 'SET_TASK_LISTS';

let initialState = {
    data: [],
    items: [{taskTitle: 'print the documents'}]
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_LISTS:
            return { ...state, data: action.data };
        default:
            return state;
    }
}
export const setTaskLists = (data) => {
    return {
        type: SET_TASK_LISTS, data
    }
}

export const getTaskLists = () => {
    return async (dispatch) => {
        let response = await taskListsAPI.getTaskLists();
        dispatch(setTaskLists(response.data));
    }
}

export const addNewTaskList = (title) => {
    return async (dispatch) => {
        let response = await taskListsAPI.addNewTaskList(title);
        if (response.data.resultCode === 0) {
            dispatch(getTaskLists());
        }
    }
}

export const deleteTaskList = (taskListId) => {
    return async (dispatch) => {
        let response = await taskListsAPI.deleteTaskList(taskListId);
        if (response.data.resultCode === 0) {
            dispatch(getTaskLists());
        }
    }
}

export const editTaskListTitle = (taskListId, title) => {
    return async (dispatch) => {
        let response = await taskListsAPI.updateTaskListTitle(taskListId, title);
        if (response.data.resultCode === 0) {
            dispatch(getTaskLists());
        }
    }
}
export default taskListReducer;