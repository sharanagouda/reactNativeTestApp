const initialState = [

]

const appReducer = (state = initialState, action)=>{
    switch(action.type){
        case "LOGIN" :
            return {
                ...state
            }
        default :
        return state;
    }
}

export default appReducer;