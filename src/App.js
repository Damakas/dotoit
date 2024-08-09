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
        { name: 'Learn HTML', stage: false, isToggled: true, id: 1 },
        { name: 'LearnCss', stage: false, isToggled: false, id: 2 },
        { name: 'Learn JavaScript', stage: false, isToggled: false, id: 3 },
      ],
      filter: 'all'
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
  // onStage = () => {
  //   this.setState(({ stage, isToggled }) => ({
  //     stage: !stage,
  //     isToggled: !isToggled
  //   }));
  // }
  onStage = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
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

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }




  render() {

    const { data, filter } = this.state;
    const filterData = this.filterBtns((data), filter);
    const filterLeft = data.filter(item => !item.stage).length

    return (
      <div className='App' >
        <TodoAdd onAdd={this.addTodo} />
        <div className='todos-left'>
          <TodoLeftList filterLeft={filterLeft} />
        </div>
        <div className='filter-btns'>
          <FilterBtns filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <div>
          <TodoList data={filterData}
            onDelete={this.delteItem}
            onStage={this.onStage}
            onStageBtn={this.onStageBtn}
          />
        </div>
      </div>


    )
  }
}

export default App;
