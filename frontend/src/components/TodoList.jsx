import { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <section>
        <input id='task-text' />
        <button id='add-task'>Adicionar</button>

        <ul id='todo-list'></ul>
      </section>
    );
  }
};

export default TodoList;
