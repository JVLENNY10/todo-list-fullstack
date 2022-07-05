import { Component } from 'react';
import propTypes from 'prop-types';

class Task extends Component {
  constructor() {
    super();
    this.state = { progress: 'Pendente' };
    this.setProgress = this.setProgress.bind(this);
  }

  setProgress(event) {
    const { value } = event.target;
    this.setState({ progress: value });
  }

  render() {
    const { progress } = this.state;
    const { taskId, taskValue } = this.props;

    return (
      <>
        <li key={ taskId }>{ taskValue }</li>
        <select onChange={ this.setProgress } value={ progress }>
          <option value='Pendente'>Pendente</option>
          <option value='Em andamento'>Em andamento</option>
          <option value='Concluído'>Concluído</option>
        </select>
      </>
    );
  }
};

export default Task;

Task.propTypes = {
  taskId: propTypes.number.isRequired,
  taskValue: propTypes.string.isRequired,
};
