import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,


        }
    ],
    adTodo: (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo: (id) => {},
    togglComplete: (id) => {}
})


export const useTodo = () => {
    return useContext (TodoContext)
}

export const Todoprovider = TodoContext.Provider 