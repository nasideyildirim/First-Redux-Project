import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";
import tasksReducer from "./tasks";
import postReducer from "./posts";

// reducer bilgilerini birleştirdim. 
const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    posts: postReducer,

});

const store = createStore(rootReducer);
export default store;