class TodoModel {
    constructor() {
        this.myStorage = window.localStorage;
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
    }

    bindTodoListRender = callback => {
        this.onTodoListRender = callback
    }

    _commit = todos => {
        this.onTodoListRender(todos)
        this.myStorage.setItem('todos', JSON.stringify(this.todos))
    }
 
    addTodo = todoText => {
        const todo = {
          id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
          text: todoText,
          complete: false,
        }
    
        this.todos.push(todo)
        this._commit(this.todos)
    }

    deleteTodo = id => {
        this.todos = this.todos.filter( item => item.id !== id)
        this._commit(this.todos)
    }

    toggleTodo = id => {
        this.todos.forEach(item => {
            if(item.id === id){
                item.complete = !item.complete
            }
        })
        this._commit(this.todos)
    }

    editTodo = (id, editText) => {
        this.todos.forEach(item => {
            if(item.id === id){
                item.text = editText
            }
        })
        this._commit(this.todos)
    }
}
export default TodoModel