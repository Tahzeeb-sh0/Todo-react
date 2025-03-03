import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id:1,
         title:"learn todo",
         completed:false
        }
    ],
    addTodo:(id,title,)=>{},
    updateTodo:(id,title)=>{},
    deleteTodo:(id)=>{},
    togalComplete:(id)=>{}
});

export const useTodo = () => {
  
    return  (useContext(TodoContext));

}
export const ContextProvider = TodoContext.Provider;

  