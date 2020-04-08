import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TdoListFooter";

class App extends React.Component {
    tasks = [
        {title: "ReactJS", isDone: false, priority: "low"},
        {title: "CSS", isDone: true, priority: "low"},
        {title: "JS", isDone: false, priority: "low"},
        {title: "jQuery", isDone: true, priority: "low"},
        {title: "Patterns", isDone: false, priority: "low"},
        {title: "java", isDone: true, priority: "low"},
    ];
    filterValue = "All";
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

