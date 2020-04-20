import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TdoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
   /*     setTimeout(()=>{
            let  newTask = {
                title: 'Blabla',
                isDone: false,
                priority: 'low'
            };
            let newTasks =[...this.state.tasks, newTask];
            this.setState({
                tasks: newTasks
            } );
        },2000);*/
    }

    state = {
        tasks: [
            {title: "ReactJS", isDone: false, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "low"},
            {title: "jQuery", isDone: true, priority: "low"},
            {title: "Patterns", isDone: false, priority: "low"},
            {title: "java", isDone: true, priority: "low"},
        ],
        filterValue: "All"
    };
    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    {/*<TodoListHeader/>*/}
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

