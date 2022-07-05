import Task from './Task';
import { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = { tasks: [''] };
    this.findAll = this.findAll.bind(this);
  }

  componentDidMount() {
    this.findAll();
  }

  async findAll() {
    try {
      const response = await fetch('http://localhost:3333');
      const tasks = await response.json();
      this.setState({ tasks: tasks });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <section>
        <input id='task-text' />
        <button id='add-task'>Adicionar</button>

        <ul id='todo-list'>
          {
            tasks.map((task, index) => (
              <Task taskId={ index } taskValue={ task.task } />
            ))
          }
        </ul>
      </section>
    );
  }
};

export default TodoList;
