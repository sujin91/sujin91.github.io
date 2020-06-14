function User() {
    this.init = () => {
        this.myStorage = window.localStorage;
        this.currentUser = JSON.parse(localStorage.getItem('user')) || []
    }

    this.addUser = user => {
        this.currentUser = user
        this._commit(this.currentUser)
    }

    this._commit = user => {
        this.myStorage.setItem('user', JSON.stringify(this.currentUser))
    }

    this.init()
}

export default User