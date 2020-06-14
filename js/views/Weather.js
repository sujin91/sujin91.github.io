function Weather () {
    const COORDS = "coords"
    // const API_KEY = "7fa7a0972841da2461135d7a5c23e3c0"
    const API_KEY = "886705b4c1182eb1c69f28eb8c520e20" //test

    this.init = () => {
        this.$weather = document.querySelector('.weather_area')

        this.myStorage = window.localStorage;
        this.coords = JSON.parse(localStorage.getItem(COORDS)) || null
        
        this.getCoords()
    }

    this.getWeather = async (lat, lon) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            const data = await res.json()

            this.temperature = data.main.temp
            this.place = data.name

            this.render()
        }
        catch(error) {
            throw new Error(error)
        }
    }

    this._commit = (coords) => {
        this.myStorage.setItem('coords', JSON.stringify(coords))
    }

    this.getCoords = () => {
        if(this.coords === null) {
            this.setCoords()
        }
        else {
            this.getWeather(this.coords.latitude, this.coords.longitude)
        }
    } 
    this.setCoords = () => {
        navigator.geolocation.getCurrentPosition(this.handleGeoSuccess, this.handleGeoError)
    }

    this.handleGeoSuccess = position => {
        this.coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        this._commit(this.coords)
    }

    this.handleGeoError = () => {
        console.log('GeoError')
    }

    this.render = () => {
        this.$weather.innerText = `${this.temperature} @ ${this.place}`
    }

    this.init()
}
export default Weather
