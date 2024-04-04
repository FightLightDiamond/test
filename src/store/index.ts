// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import _rootReducer from './reducers/root.reducer';
import _rootSaga from "./sagas/_root.saga";
import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const initialState = {};
/**
 * Saga Middleware
 */
const sagaMiddleware = createSagaMiddleware()

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	version: 1,
// 	// whitelist: [],
//   // stateReconciler: autoMergeLevel2
// }

// const persistedReducer = persistReducer(persistConfig, _rootReducer)

const store = configureStore({
    reducer: _rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    })
        .concat(sagaMiddleware)
});

// export const store = configureStore({
//     reducer: {},
// })

store.subscribe(() => {
    console.log('store', store.getState())
})

sagaMiddleware.run(_rootSaga)

// export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//useAppDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;