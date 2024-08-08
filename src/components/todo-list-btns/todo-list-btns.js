import './todo-list-btns.css'
import TodoListItem from '../todo-list-item/todo-list-item'

const TodoList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        return (
            <TodoListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />

        )
    })

    return (
        <div>
            {elements}
        </div>
    )

}


export default TodoList