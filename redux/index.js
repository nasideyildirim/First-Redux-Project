//Kodu parçalamadan önce index te yazdığımız kısmı yorum satırına aldım !!!

/*import {hello} from "./reduxStore/store"
console.log("index is running");
console.log(hello);*/

//import { createStore } from "redux";


/*//ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//ACTION CREATORS
const increment = (value =1) => {
    return{//obje
        type: INCREMENT,
        payload: value

    }
}

const decrement = (value = 1) => ({
    type: DECREMENT,
    payload: value
})

//REDUCER
const countReducer = (count = 0, action) =>{
   switch(action.type){
       case INCREMENT:
           return count + action.payload;
        case DECREMENT:
            return count - action.payload;
       default:
           return count
   }
}

//STORE
const store = createStore(countReducer);
store.subscribe(() => console.log(store.getState()));

console.log(store);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(increment(10));
store.dispatch(decrement(100));
//console.log("state::", store.getState()); */

/*//ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

//ACTION CREATOR
const increment = (value =1) => {
    return{//obje
        type: INCREMENT,
        payload: value

    }
}

const decrement = (value = 1) => ({
    type: DECREMENT,
    payload: value
});

const addTask =(id, title) => ({
    type: ADD_TASK,
    payload: {id, title} //{id : id ,title : title}
});

const removeTask =(id) => ({
    type: REMOVE_TASK,
    payload: id 
});

const initialValues ={
    count: 0,
    tasks: [],
};



//ADD_TASK ({id, title})
//REMOVE_TASK(id)

//REDUCER
const reducer = (state = initialValues, action) =>{
   switch(action.type){
       case INCREMENT:
           return {...state, count: state.count + action.payload};
        case DECREMENT:
            return {...state, count: state.count - action.payload};
         case ADD_TASK:
                return {...state, tasks: [...state.tasks - action.payload]};
          case REMOVE_TASK:
              //Filter /olmayanları filtrele
                return {...state, tasks: state.tasks.filter((item) => item.id !== action.payload),};
       default:
           return state;
   }
};


//STORE
const store = createStore(reducer);*/
import store from "./reduxStore";
import { increment, decrement} from "./reduxStore/counter";
import { addPost, addUpVote } from "./reduxStore/posts";
import { addTask, removeTask} from "./reduxStore/tasks";
import {addPost, addUpVote, removePost, updatePost, addComment, removeComment, removeUserComments, addDownVote} from "./reduxStore/posts"

store.subscribe(() => console.log(store.getState())); //her işlem olduğunda güncel durumu gösterir.

console.log(store);
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(increment(10));
store.dispatch(decrement(100));
store.dispatch(addTask(1, "Naside"));
store.dispatch(addTask(1, "Yildirim"));
store.dispatch(removeTask(1));
store.dispatch(addPost(1, "Deneme Post Bilgisi"));

store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
//console.log("state::", store.getState());

store.dispatch(addPost(7, "post"))
store.dispatch(addPost(8, "newpost"))

store.dispatch(addUpVote(5))// id si 5 olan postun votes değerini 1 artırır

store.dispatch(addDownVote(3)) // id si 3 olan postun votes değerini 1 azaltır
store.dispatch(updatePost(6, "updatedpost"))
store.dispatch(removePost(8))
store.dispatch(addComment(7, 1, "first comment"))

store.dispatch(addComment(7, 2, "second user first comment"))

store.dispatch(addComment(9, 1, "first user first comment"))

store.dispatch(addComment(9, 2, "second user first comment"))

store.dispatch(removeComment(7,0))
store.dispatch(removeUserComments(1))

//console.log(store.getState());
//console.log(store.getState().posts[0].votes);
//console.log("***FIRST POST COMMENTS: ", store.getState().posts[0].comments);

