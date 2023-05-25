export const createNote = payload => {
    return {
        type: "CREATE_NOTE",
        payload
    }
};

export const editNote = payload => {
    type: "EDIT_NOTE",
    payload
};