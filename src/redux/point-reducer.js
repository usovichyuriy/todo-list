const ADD_POINT = 'ADD_POINT';
const UPDATE_NEW_POINT_TEXT = 'UPDATE_NEW_POINT_TEXT';
const DELETE_POINT = 'DELETE_POINT';

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
            stateCopy.pointsData = [ ...state.pointsData ];
            stateCopy.pointsData.push({
                message: state.newPointText,
            })
            stateCopy.newPointText = '';
            return stateCopy;
        case UPDATE_NEW_POINT_TEXT:
            stateCopy.newPointText = action.newPointText;
            return stateCopy;
        case DELETE_POINT:
            let index = stateCopy.pointsData.findIndex(point => 
                point.message === action.newPointText
            );
            stateCopy.pointsData = [ ...state.pointsData ];
            stateCopy.pointsData.splice(index, 1);
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

export const deletePointActionCreator = (text) => {
    return {
        type: DELETE_POINT,
        newPointText: text
    }
}
export default pointReducer;