const ADD_POINT = 'ADD_POINT';
const UPDATE_NEW_POINT_TEXT = 'UPDATE_NEW_POINT_TEXT';

let initialState = {
    pointsData: [
        { message: 'learn react' },
        { message: 'learn js' },
        { message: 'learn redux' },
        { message: 'learn programming' }
    ],
    newPointText: ''
}

const pointReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case ADD_POINT:
            stateCopy.pointsData.push({
                message: state.newPointText,
            })
            stateCopy.newPointText = '';
            return stateCopy;
        case UPDATE_NEW_POINT_TEXT:
            stateCopy.newPointText = action.newPointText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPointActionCreator = () => {
    return {
        type: ADD_POINT
    }
}

export const updateNewPointTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POINT_TEXT,
        newPointText: text
    }
}
export default pointReducer;