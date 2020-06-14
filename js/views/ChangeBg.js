function ChangeBg () {
    const IMG_NUMBER = 3;

    this.init = () => {
        this.$momentum = document.querySelector('.momentum')

        const order = this.getRandom();        
        this.paintImage(order);
    }

    this.paintImage = imgNumber => {
        this.$momentum.style.backgroundImage = `url(img/image${imgNumber+1}.jpg)`
    }

    this.getRandom = () => {
        const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
    }

    this.init()
}
export default ChangeBg