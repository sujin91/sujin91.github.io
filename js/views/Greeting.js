function Greeting (user) {
    this.user = user

    this.init = () => {
        this.$greeting = document.querySelector('.greeting')
        this.$user = document.querySelector('.user')
        this.$inputUser = document.querySelector('.input_user')
        this.bindInputUser()
        this.render()
    }

    this.bindInputUser = () => {
        this.$inputUser.addEventListener('keydown', e => {
            if(e.keyCode === 13) {
                this.handleInputUser(this.$inputUser.value) //핸들
            }
        })
    }

    this.handleInputUser = (name) => {
        this.user.addUser(name)
        this.render()
    }

    this.render = () => {
        if(this.user.currentUser.length !== 0) {
            this.$inputUser.style.display = 'none'
            this.$greeting.style.display = 'block'
            this.$user.innerText = this.user.currentUser
        }
        else {
            this.$inputUser.style.display = 'block'
            this.$greeting.style.display = 'none'
        }
    }

    this.init()
}
export default Greeting
