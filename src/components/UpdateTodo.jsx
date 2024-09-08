
import { updateTodo } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function UpdateTodo() {
    const todos = useSelector(states => states.todos)
    const dispatch = useDispatch()
    const handleUpdateTodo = (id) => {
        dispatch(updateTodo(id))
    }
    return (
    <>
      {/* <div>updateTodo</div> */}
      <ul
      className='list-none'
            >
                {todos.map((todo) => (
                    <li key={todo.id}
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                        <div className='text-green-400'>{todo.text}</div>
                        <button
                        onClick={() => handleUpdateTodo(todo.id)}
                        >
                            update</button>
                </li>
            ))}
      </ul>
    </>
  )
}

export default UpdateTodo