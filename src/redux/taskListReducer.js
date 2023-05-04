import { taskListsAPI } from "../api/api";

const SET_TASK_LISTS = "SET_TASK_LISTS";
const SET_TASKS = "SET_TASKS";

let initialState = {
  data: [],
  items: [],
};

const taskListReducer = (state = initialState, action) => {
  let itemsCopy = [...state.items];

  switch (action.type) {
    case SET_TASK_LISTS:
      return { ...state, data: action.data };
    case SET_TASKS:
      if (action.items !== undefined && itemsCopy.length === 0) {
        return { ...state, items: action.items };
      } else if (action.items !== undefined && itemsCopy.length > 0) {
        let otherTasks = itemsCopy.filter(
          (item) => item.todoListId !== action.todoListId
        );
        let newItems = otherTasks.concat(action.items);
        return { ...state, items: newItems };
      }
    default:
      return state;
  }
};
export const setTaskLists = (data) => {
  return {
    type: SET_TASK_LISTS,
    data,
  };
};

export const setTasks = (items, todoListId) => {
  return {
    type: SET_TASKS,
    items,
    todoListId,
  };
};

export const getTaskLists = () => {
  return async (dispatch) => {
    let response = await taskListsAPI.getTaskLists();
    dispatch(setTaskLists(response.data));
  };
};

export const addNewTaskList = (title) => {
  return async (dispatch) => {
    let response = await taskListsAPI.addNewTaskList(title);
    if (response.data.resultCode === 0) {
      dispatch(getTaskLists());
    }
  };
};

export const deleteTaskList = (taskListId) => {
  return async (dispatch) => {
    let response = await taskListsAPI.deleteTaskList(taskListId);
    if (response.data.resultCode === 0) {
      dispatch(getTaskLists());
    }
  };
};

export const editTaskListTitle = (taskListId, title) => {
  return async (dispatch) => {
    let response = await taskListsAPI.updateTaskListTitle(taskListId, title);
    if (response.data.resultCode === 0) {
      dispatch(getTaskLists());
    }
  };
};

export const getTasksForList = (todoListId) => {
  return async (dispatch) => {
    let response = await taskListsAPI.getTasksForList(todoListId);
    dispatch(setTasks(response.data.items, todoListId));
  };
};

export const addNewTask = (todoListId, title) => {
  return async (dispatch) => {
    let response = await taskListsAPI.addNewTask(todoListId, title);
    if (response.data.resultCode === 0) {
      dispatch(getTasksForList(todoListId));
    }
  };
};

export const deleteTask = (todoListId, taskId) => {
  return async (dispatch) => {
    let response = await taskListsAPI.deleteTask(todoListId, taskId);
    if (response.data.resultCode === 0) {
      dispatch(getTasksForList(todoListId));
    }
  };
};

export const editTask = (
  todoListId,
  taskId,
  { title, description, completed, status, priority, startDate, deadline }
) => {
  return async (dispatch) => {
    let response = await taskListsAPI.editTask(todoListId, taskId, {
      title,
      description,
      completed,
      status,
      priority,
      startDate,
      deadline,
    });
    if (response.data.resultCode === 0) {
      dispatch(getTasksForList(todoListId));
    }
  };
};
export default taskListReducer;
