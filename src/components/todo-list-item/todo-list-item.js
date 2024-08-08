import { Component } from 'react'
import './todo-list-item.css';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: false,
            isToggled: false
        }
    }

    onStage = () => {
        this.setState(({ stage, isToggled }) => ({
            stage: !stage,
            isToggled: !isToggled
        }));
    }


    render() {
        const { name, onDelete } = this.props;
        const { stage } = this.state;
        let classNamesText = ' value_text';
        let classNamesBtn = 'btn_base btn_complete'
        if (stage) {
            classNamesText += ' lined_text'
            classNamesBtn += ' btn_cancel'
        }

        return (
            <li className='wrapper_list ' >
                <div className='list_container'>
                    <button className={classNamesBtn} onClick={this.onStage} > {this.state.isToggled ? 'Cancel' : 'Complete'} </button >
                    <p className={classNamesText}>{name}</p>
                    <div className='list_container-inner'>
                        <button onClick={onDelete} className="btn_base btn_del">Delete</button>
                    </div>
                </div >
            </li >
        )
    }
}

export default TodoListItem