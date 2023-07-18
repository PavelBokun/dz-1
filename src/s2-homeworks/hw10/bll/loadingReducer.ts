
interface IChangeLoadingAction {
    type: 'CHANGE_LOADING';
    isLoading: boolean;
}

 export type LoadingActionType = IChangeLoadingAction;
const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': 
        return {...state,isLoading: action.isLoading}  /////тут дописал 'CHANGE_LOADING'
        default:
            return state
    }
}



export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
