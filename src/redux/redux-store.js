import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   friends: friendsReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers);

export default store;