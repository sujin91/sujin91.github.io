import Controller from './controllers/Controller.js'

import TodoModel from './models/TodoModel.js'
import User from './models/User.js';

import ChangeBg from './views/ChangeBg.js'
import Clock from './views/Clock.js'
import Greeting from './views/Greeting.js'
import TodoView from './views/TodoView.js'
import Weather from './views/Weather.js'


function App() {
    console.log('app create')
    this.init = () => {
        this.changeBg = new ChangeBg()
        this.weather = new Weather()
        this.clock = new Clock()
        this.greeting = new Greeting(new User())
        this.todoList = new Controller(new TodoModel(), new TodoView())
    }
    this.init()
}

new App()

