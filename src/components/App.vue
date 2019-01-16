<template>
    <div id="app" @click="checkWeatherCatalog">
        <HeaderComponent></HeaderComponent>
        <MainComponent
                v-bind:weather="state.weatherCatalog"
                v-bind:location="state.userLocation"
        ></MainComponent>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent.vue';
    import MainComponent from './MainComponent.vue';

    export default {
        components: {
            'HeaderComponent': HeaderComponent,
            'MainComponent': MainComponent
        },
        methods: {
            setPosition: function() {
                function setCoords(position) {
                    this.state.lat = position.coords.latitude,
                    this.state.lng = position.coords.longitude,
                    this.state.coords = [position.coords.latitude, position.coords.longitude],
                    this.state.queryString = `${this.state.proxyUrl}https://api.darksky.net/forecast/${this.state.key}/${position.coords.latitude},${position.coords.longitude}?extend=hourly`,
                    this.state.queryStringTwo = `${this.state.proxyUrl}http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${this.state.keyTwo}&q=${position.coords.latitude},${position.coords.longitude}&num_of_days=14&tp=4&format=json`
                  }
                navigator.geolocation.getCurrentPosition(setCoords.bind(this))
            },
            checkWeatherCatalog: function() {
                var th = this;



                function sendFetch() {
                    console.log('step', th.state.weatherCatalog)

                    fetch(th.state.queryString)
                            .then(function(response) { return response.json() })
                            .then(function(responseJson) { th.state.weatherCatalog = responseJson })
                            .then(function(responseJson) { clearInterval(sendInterval) })
                            .catch( function (error)  { console.log(error)});

                    fetch(th.state.queryStringTwo)
                            .then(function(response) { return response.json() })
                            .then(function(responseJson) { th.state.weatherCatalogTwo = responseJson })
                            .catch( function (error)  { console.log(error)});
                }

                if (Object.keys(th.state.weatherCatalog).length === 0) {
                    var sendInterval = setInterval(sendFetch, 1000)
                };

                if (Object.keys(this.state.userLocation).length === 0) {
                    fetch('https://ipinfo.io/json')
                            .then(function(response) { return response.json() })
                            .then(function(data) { th.state.userLocation = data.city })
                }
            }
        },
        created() {
            this.setPosition();
            this.checkWeatherCatalog();
        },
        data: function() {
            return {
                state: {
                    city: '',
                    lng: '',
                    key: 'ab6338e8bd1a7191fda2d2ceaed39a93',
                    // keyTwo: 'f7f36a0c7c3e4214a5e193731182312',
                    keyTwo: 'dd6301427900459c863160646190201',
                    coords: [],
                    proxyUrl: 'https://cors-anywhere.herokuapp.com/',
                    queryString: '',
                    queryStringTwo: '',
                    weatherCatalog: {},
                    weatherCatalogTwo: {},
                    userLocation: {},
                    userLocationRu: {},
                }
            }
        }
    }
</script>