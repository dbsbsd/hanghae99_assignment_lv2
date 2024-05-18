import  { defaultTodos } from "../../shared/Data";

// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

export const toggleStatusTodo = (payload) => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    };
};

const initialState = {
    todos: defaultTodos,
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            const deleteTodos = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
            return {
                ...state,
                todos: deleteTodos,
            };
        // case GET_TODO_BY_ID:
        //     return {
        //         ...state,
        //         todo: state.todos.find((todo) => {
        //             return todo.id === action.payload;
        //         }),
        //     };
        case TOGGLE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    }
                    return todo;
                }),
            };
        default:
            return state;
    }
};

export default todos;