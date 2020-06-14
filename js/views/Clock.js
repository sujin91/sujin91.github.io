function Clock () {
    this.init = () => {
        this.$clock = document.querySelector('.clock')

        this.getTime()
        this.render()
    }

    this.getTime = () => {
        const date = new Date()
        this.hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        this.min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }

    this.render = () => {
        this.$clock.innerText = `${this.hour}:${this.min}`
    }

    setInterval(this.init, 1000);
}
export default Clock