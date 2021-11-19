import { createSlice } from '@reduxjs/toolkit'

// const [state, setState] = useState()
const initialState = {
    todoList : []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, actions) => {
            state.todoList = (actions.payload)
        },
        setCheck: (state, actions) => {
            state.todoList.map(item => {
                if (actions.payload === item.id) {
                    item.done = !item.done
                }
            })
        }
    }
});

export const {saveTodo, setCheck} = todoSlice.actions
export const selectTodoLista = (state) => state.todos.todoList
export default todoSlice.reducer