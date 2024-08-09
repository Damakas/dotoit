import './todo-list-btns.css'
import TodoListItem from '../todo-list-item/todo-list-item'

const TodoList = ({ data, onDelete, onStage, onStageBtn }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        return (
            <TodoListItem key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onStage={(e) => onStage(id, e.currentTarget.getAttribute('data-toggle'))}


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