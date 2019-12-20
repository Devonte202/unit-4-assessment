class List {
    constructor(){
        this._toDoList = [];
        this._completedList = [];
    }
    get toDoList(){
        console.log('To-do list:');
        for(let tasks in this._toDoList){
            console.log(`${+tasks + 1 }: ${this._toDoList[tasks].text}`);
        }
    }
    get completedList(){
        console.log('Completed list:');
        for(let tasks in this._completedList){
            console.log(`${+tasks + 1}: ${this._completedList[tasks].text}`);
        }
    }
    addTask(text){
        this._toDoList.push(new Task(text))
        return "Task added";
    }
    completeTask(task){
        this._completedList.push(this._toDoList[task])
        this._toDoList.splice(task, 1);
        return "Task completed";
    }
    incompleteTask(task){
        this._toDoList.push(this._completedList[task])
        this._completedList.splice(task, 1);
        return "Task moved to To-do list";
    }
    deleteTask(task){
        this.toDoList.splice(this.completedList[task], 1);
        return "Task deleted";
    }
}

class Task {
    constructor(text){
        this.text = text;
    }
}
