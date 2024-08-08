import React, { Component } from 'react';
import './App.css';
import TodoAdd from './components/todo-add-input-btn/todo-add-input-btn';
import TodoLeftList from './components/todo-lefts-list/todo-lefts-list';
import FilterBtns from './components/todo-filter-btns/todo-filter-btns';
import TodoList from './components/todo-list-btns/todo-list-btns'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { name: 'Learn HTML', stage: true, id: 1 },
        { name: 'LearnCss', stage: false, id: 2 },
        { name: 'Learn JavaScript', stage: false, id: 3 },
      ],
      filter: 'active'
    }
    this.maxId = 4;

  }

  delteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }

    })
  }


  addTodo = (name) => {
    const newTodo = {
      name,
      stage: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newTodo];
      return {
        data: newArr
      }
    })
  }
  filterBtns = (items, filter) => {
    switch (filter) {
      case 'active':
        return items.filter(item => !item.stage);
      case 'completed':
        return items.filter(item => item.stage);
      default:
        return items
    }
  }


  render() {

    const { data, filter } = this.state;
    const filterData = this.filterBtns((data), filter)

    return (
      <div className='App' >
        <TodoAdd onAdd={this.addTodo} />
        <div className='todos-left'>
          <TodoLeftList number={data.length} />
        </div>
        <div className='filter-btns'>
          <FilterBtns />
        </div>
        <div>
          <TodoList data={filterData}
            onDelete={this.delteItem}
          />
        </div>
      </div>


    )
  }
}

export default App;
