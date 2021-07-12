import { GET_TODO, GET_TODO_BY_ID } from "../constants"

const initialstate = {
    todos: [],
    todo: {
        id: null,
        name: null,
        decription: null,
    }
}

const todoReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case GET_TODO:
            return{
                ...state,
                todos: payload
            }
        case GET_TODO_BY_ID:
            const findTodo = state.todos.find((todo) => todo.id.toString() === payload.toString())
            return{
                ...state,
                todo: findTodo
            }
        default:
            return state
    }
}

export default todoReducer