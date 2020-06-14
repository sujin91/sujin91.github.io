class TodoView {
    constructor() {
        this.$todo = document.querySelector('.todo_area')
        
        this.$title = this.createElement('h1', 'title')
        this.$title.innerHTML = 'Todos'

        this.$form = this.createElement('form')

        this.$input = this.createElement('input')
        this.$input.type = 'text'
        this.$input.placeholder = 'Add todo'
        this.$input.name = 'todo'

        this.$submitButton = this.createElement('button')
        this.$submitButton.textContent = 'Submit'
        this.$submitButton.type = 'submit'

        this.$form.append(this.$input, this.$submitButton)

        this.$todoList = this.createElement('ul', 'todo-list')
        this.$todoCount = this.createElement('strong', 'todo-count')

        this.$todo.append(this.$title, this.$form, this.$todoList, this.$todoCount)

        this._temporaryTodoText = ''
    }

    //helper
    createElement = (tag, className) => {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
    }

    bindAddTodo = handler => {
        this.$form.addEventListener('submit', e => {
            e.preventDefault();
            if(this.$input.value) {
                handler(this.$input.value)
                this.$input.value = ''
            }
        })
    }

    bindDeleteTodo = handler => {
        this.$todoList.addEventListener('click', e => {
            if(e.target.innerHTML === 'Delete') {
                handler(parseInt(e.toElement.parentNode.id))
            }
            
        })
    }

    bindToggleTodo = handler => {
        this.$todoList.addEventListener('click', e => {
            if(e.target.type === 'checkbox') {
                handler(parseInt(e.toElement.parentNode.id))
            }
        })
    }

    _localListener = () => {
        this.$todoList.addEventListener('input', e => {
            this._temporaryTodoText = e.target.innerText
            
        })
    }

    bindEditTodo = handler => {
        this.$todoList.addEventListener('focusout', e => {
            if(e.target.nodeName === 'SPAN') {
                this._temporaryTodoText = e.target.innerText
                handler(parseInt(e.target.parentNode.id), this._temporaryTodoText)
            }
        })
    }

    renderTodos = todos => {
        while (this.$todoList.firstChild) {
            this.$todoList.removeChild(this.$todoList.firstChild)
        }
        
        if(todos.length === 0) {
            const $p = this.createElement('p')
            $p.innerHTML = 'Nothing to do! Add a task?'
            this.$todoList.append($p)
        } else {
            todos.forEach(item => {
                const $li = this.createElement('li')
                $li.id = item.id

                const $checkbox = this.createElement('input')
                $checkbox.type = 'checkbox'
                $checkbox.checked = item.complete

                const $span = this.createElement('span')

                $span.innerHTML = item.text
                $span.contentEditable = true

                if(item.complete === true) {
                    $span.innerHTML = `<strike>${item.text}</strike>`
                }

                const $button = this.createElement('button')
                $button.innerHTML = 'Delete'
                
                $li.append($checkbox, $span, $button)
                this.$todoList.append($li)    
                this.$todoCount.innerHTML = `총: ${todos.length}` 
            })
        }
    }
}
export default TodoView