const notesReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case "CREATE_NOTE":
            newState[action.payload.id] = {
                ...action.payload
            };
        break;
    }

    return newState;
};

export default notesReducer;