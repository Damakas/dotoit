import { Component } from "react"
import { Container } from "react-bootstrap"
import './todo-add-input-btn.css'

class TodoAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAdd(this.state.name)
        this.setState({
            name: '',
        })
    }

    render() {

        const { name, addTodo } = this.state;

        return (
            <Container>
                <form onSubmit={this.onSubmit} >
                    <h1 className="mt-3">JS Todos App</h1>
                    <div className="wrapper">
                        <div className="todo-add-info">
                            <input type="text"
                                placeholder="Add todo"
                                name="name"
                                onChange={this.onValueChange}
                                value={name} />
                            <button onClick={addTodo} className="btn_base btn_add">Add</button>
                        </div>
                    </div>
                </form>
            </Container >
        )
    }
}

export default TodoAdd;