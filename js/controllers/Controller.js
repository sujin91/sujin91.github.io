
class Controller {
    constructor(model, view) {
        this.TodoModel = model
        this.TodoView = view

        this.TodoModel.bindTodoListRender(this.onTodoListRender)

        this.onTodoListRender(this.TodoModel.todos)
        this.TodoView.bindAddTodo(this.handleAddTodo)
        this.TodoView.bindDeleteTodo(this.handleDeleteTodo)
        this.TodoView.bindToggleTodo(this.handleToggleTodo)
        this.TodoView.bindEditTodo(this.handleEditTodo)
        this.TodoView._localListener()
    }

    onTodoListRender = todos => {
        this.TodoView.renderTodos(todos)
    }

    handleAddTodo = todoText => {
        this.TodoModel.addTodo(todoText)
    }

    handleDeleteTodo = id => {
        this.TodoModel.deleteTodo(id)   
    }

    handleToggleTodo = id => {
        this.TodoModel.toggleTodo(id)   
    }

    handleEditTodo = (id, editText) => {
        this.TodoModel.editTodo(id, editText)   
    }
}
export default Controller