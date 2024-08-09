import './todo-list-item.css';

const TodoListItem = (props) => {

    const { name, stage, onDelete, onStage, } = props;

    let classNamesText = ' value_text';
    let classNamesBtn = 'btn_base btn_complete'
    if (stage) {
        classNamesText += ' lined_text'
        classNamesBtn += ' btn_cancel'
    }

    return (
        <li className='wrapper_list ' >
            <div className='list_container'>
                <button className={classNamesBtn}
                    onClick={onStage}
                    data-toggle='stage'
                    id='toggleBtn'
                > {stage ? 'Cancel' : 'Complete'} </button >
                <p className={classNamesText}>{name}</p>
                <div className='list_container-inner'>

                    <button onClick={onDelete} className="btn_base btn_del">Delete</button>
                </div>
            </div >
        </li >
    )
}

export default TodoListItem