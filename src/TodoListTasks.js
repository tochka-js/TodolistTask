import React from 'react';
import TodoListTask from "./TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map(t => {
            return (
                <TodoListTask title={t.title} isDone={t.isDone} priority={t.priority}/>
            )
        });

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

