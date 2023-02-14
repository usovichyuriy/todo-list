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
    return state;
}
export default pointReducer;