//initialize the function with two arguments
export const ProcessReducer = (state = {}, action) => {
    switch (action.type) {
        //returns updated state
        case "Process":
            return { ...action.payload };
        //else the current state is retained
        default:
            return state;
        
    }
};