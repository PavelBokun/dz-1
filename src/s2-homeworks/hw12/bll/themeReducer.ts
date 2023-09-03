import {combineReducers, legacy_createStore } from 'redux';
// import { themeReducer } from './reducers';
 export interface ThemeState {
    themeId: number;
  }

type ActiosType= {
    type: 'SET_THEME_ID'
    id:number
}

const initState:ThemeState = {
    themeId: 1,
}

export const themeReducer = (state:ThemeState = initState, action: ActiosType): ThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}
            
        default:
            return state
    }
}


 

export const changeThemeId = (id: number):ActiosType => ({ type: 'SET_THEME_ID', id }) // fix any
