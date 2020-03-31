import React from 'react';

import TodoListHeader from "./TodoListHeader";

class TodoListFooter extends React.Component {
    render = () => {
        return (
                    <div className="todoList-footer">
                        <button>All</button>
                        <button>Completed</button>
                        <button>Active123123</button>
                    </div>

        );
    }
}

export default TodoListFooter;

