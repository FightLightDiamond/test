import { combineReducers } from "redux";
import { IAction } from '../interfaces/IAction';
// import authReducer from './auth.slice';
// import tutorialReducer from './tutorial.slice'
// import lessonReducer from './lesson.slice'

const appReducer = combineReducers({
    // auth: authReducer,
    // lesson: lessonReducer,
    // tutorial: tutorialReducer,
})

const rootReducer = (state: any, action: IAction<any>) => {
    return appReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;